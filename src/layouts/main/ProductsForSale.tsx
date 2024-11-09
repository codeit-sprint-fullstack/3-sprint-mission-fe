import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductSearchBar from './ProductSearchBar';
import AddProductButton from './AddProductButton';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { getProductsForSale } from '../../services/ProductService';
import SortByDropdown from './../../shared/SortByDropdown';

export type Items = {
  list: {
    createdAt: Date;
    description: string;
    id: number;
    favoriteCount: number;
    images: string[];
    name: string;
    ownerId: number;
    price: number;
    tags: string[];
    updatedAt: Date;
  }[];
  totalCount: number;
};

const ProductsForSale = () => {
  const [items, setItems] = useState<Items>({ list: [], totalCount: 0 });
  const [pageNo, setPageNo] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const [orderBy, setOrderBy] = useState('recent');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // 화면 크기에 따라 pageSize 조정
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width > 1024) setPageSize(10);
      else if (width > 768) setPageSize(6);
      else setPageSize(4);
    };

    updatePageSize(); // 초기 pageSize 설정
    window.addEventListener('resize', updatePageSize); // 화면 리사이즈 시 업데이트

    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getProductsForSale(
        pageNo,
        pageSize,
        orderBy,
        searchKeyword
      );
      if (data) {
        setItems(data);
      }
    };

    fetchItems();
  }, [pageNo, pageSize, orderBy, searchKeyword]);

  if (!items.list) return null;

  return (
    <section>
      {/* 데스크탑 버전 */}
      <Header>
        <ProductTitle>판매 중인 상품</ProductTitle>
        <ProductActionsContainer>
          <ProductSearchBar setSearchKeyword={setSearchKeyword} />
          <AddProductButton />
          <SortByDropdown setOrderBy={setOrderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </SortByDropdown>
        </ProductActionsContainer>
      </Header>

      {/* 모바일 버전 */}
      <MobileHeader>
        <MobileTitleAndAddButton>
          <ProductTitle>판매 중인 상품</ProductTitle>
          <AddProductButton />
        </MobileTitleAndAddButton>
        <MobileSearchAndDropDown>
          <ProductSearchBar setSearchKeyword={setSearchKeyword} />
          <SortByDropdown setOrderBy={setOrderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </SortByDropdown>
        </MobileSearchAndDropDown>
      </MobileHeader>
      <Ul>
        {items.list.map((item) => (
          <ProductCard key={item.id} item={item} type="normal" />
        ))}
      </Ul>
      <Pagination
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPage={Math.ceil(items.totalCount / 10)}
      />
    </section>
  );
};

export default ProductsForSale;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
`;

const ProductActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MobileHeader = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileTitleAndAddButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.6rem;
`;

const MobileSearchAndDropDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
