import styles from "./ItemSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import DropdownList from "./DropdownList";
import Pagination from "./Pagination";
import axiosInstance from "@/lib/axios";

// 아이템 타입 정의
type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  favoriteCount: number;
};

const getPageSize = (): number => {
  const width = window.innerWidth;
  if (width < 744) return 1;
  if (width < 1280) return 2;
  return 4;
};

export default function AllItemsSection() {
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(getPageSize());
  const [itemList, setItemList] = useState<Item[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [totalPageNum, setTotalPageNum] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");

  const fetchSortedData = async ({
    orderBy,
    page,
    pageSize,
    keyword,
  }: {
    orderBy: string;
    page: number;
    pageSize: number;
    keyword: string;
  }) => {
    try {
      const response = await axiosInstance.get("/products", {
        params: { orderBy, page, pageSize, keyword },
      });
      const products = response.data;
      setItemList(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    setPage(1);
    fetchSortedData({ orderBy, page: 1, pageSize, keyword });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  const convertToKorean = (orderBy: string): string => {
    switch (orderBy) {
      case "recent":
        return "최신순";
      case "favorite":
        return "인기순";
      default:
        return "최신순";
    }
  };

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize, keyword });

    return () => window.removeEventListener("resize", handleResize);
  }, [orderBy, page, pageSize, keyword]);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
    fetchSortedData({ orderBy, page: pageNumber, pageSize, keyword });
  };

  return (
    <div>
      <div className={styles.allItemsSectionHeader}>
        <h1 className={styles.sectionTitle}>판매 중인 상품</h1>
        <div className={styles.searchBarWrpper}>
          <Image src="/images/ic_search.png" width={24} height={24} alt="검색 아이콘" />
          <input
            className={styles.searchBarInput}
            placeholder="검색할 상품을 입력해 주세요"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Link href="/productpost">
          <div className={styles.createItemButton}>상품 등록하기</div>
        </Link>
        <div className={styles.sortButtonWrapper}>
          <button
            className={styles.sortDropdownTriggerButton}
            onClick={toggleDropdown}
          >
            <div className={styles.sortBtn}>
              <span>{convertToKorean(orderBy)}</span>
              <Image
                src="/images/ic_arrow_down.png"
                width={24}
                height={24}
                alt="아래 화살표"
              />
            </div>
          </button>
          {isDropdownVisible && <DropdownList onSortSelection={handleSortSelection} />}
        </div>
      </div>
      <div className={styles.allItemsCardSection}>
        {itemList.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
      <div className={styles.paginationBarWrapper}>
        <Pagination
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
