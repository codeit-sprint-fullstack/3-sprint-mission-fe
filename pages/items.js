import { BestProducts } from "../components/items/BestProducts";
import { OnSaleProducts } from "../components/items/OnSaleProducts";
import { OnSaleBanner } from "../components/items/OnSaleBanner";
import { PagiNation } from "../components/items/PagiNation";
import { useState, useEffect } from "react";
import styles from "@/styles/itemPage.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import codeitAxios from "@/lib/codeitAxios";

function ItemsPage() {
  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "favorite" },
  ];
  // 정렬 state
  const [order, setOrder] = useState(options[0]);
  const orderValue = order.value; 

  // 페이지 state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  // 베스트 상품 state
  const [bestProducts, setBestProducts] = useState([]);

  // 판매 중인 상품 state
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  //좋아요 순으로 정렬된 리스트 4개 가져와서 setState
  useEffect(() => {
    async function getBestProducts() {
      const res = await codeitAxios.get(
        "/products?pageSize=4&orderBy=favorite"
      );
      const bestProducts = res.data.list;
      setBestProducts(bestProducts);
    }
    getBestProducts();
  }, []);

  //드롭다운으로 정렬 종류 받아서 10개 가져오기
  useEffect(() => {
    async function getOnSaleProducts() {
      //order 가 최신순이면 recent 좋아요순이면 favorite 값 넘김
      const res = await codeitAxios(`/products?page=${currentPage}&orderBy=${orderValue}`);
      const products = res.data.list;
      // 리스트 객체배열 할당
      setOnSaleProducts(products);
      // 총 페이지 계산
      setTotalPages(Math.ceil(res.data.totalCount / 10));
    }
    getOnSaleProducts();
  }, [order, currentPage]);

  // 정렬 클릭 함수 setOrder
  const handleOrderClick = (selectedOrder) => setOrder(selectedOrder);
  // 페이지 변경 함수
  const handlePageClick = (page) => setCurrentPage(page);

  const handlePrevGroup = () => {
    const prevGroup = pageGroup - 1;
    if (prevGroup >= 0) setPageGroup(prevGroup);
  };

  const handleNextGroup = () => {
    const nextGroup = pageGroup + 1;
    if (nextGroup * 5 < totalPages) setPageGroup(nextGroup);
  };
  return (
    <>
      <Header />
      <section className={styles.contentsBody}>
        <div className={styles.bestProducts}>
          <div>
            <div className={styles.textBold}>베스트 상품</div>
            <BestProducts products={bestProducts} />
          </div>
        </div>
        <div className={styles.onSaleProducts}>
          <div className={styles.onSaleCon}>
            <OnSaleBanner
              options={options}
              order={order}
              orderChange={handleOrderClick}
            />
            <div className={styles.productGrid}>
              <OnSaleProducts products={onSaleProducts} />
            </div>
          </div>
        </div>
        <PagiNation
          currentPage={currentPage}
          totalPages={totalPages}
          pageGroup={pageGroup}
          onPageChange={handlePageClick}
          onPrevGroup={handlePrevGroup}
          onNextGroup={handleNextGroup}
        />
      </section>
      <Footer />
    </>
  );
}
export default ItemsPage;
