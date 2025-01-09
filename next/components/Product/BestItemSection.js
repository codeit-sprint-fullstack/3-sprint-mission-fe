import { useState, useEffect } from "react";
import BestItemCard from "./BestItemCard";
import axiosInstance from "@/lib/axios"; // 설정한 axiosInstance를 import
import styles from "./ItemSection.module.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 744) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

export default function BestItemSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  // API 호출 함수 수정
  const fetchSortedData = async ({ orderBy, pageSize }) => {
    try {
      const response = await axiosInstance.get('/products', {
        params: {
          orderBy,
          pageSize,
        },
      });
      setItemList(response.data.list);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);

    // 페이지 크기가 바뀔 때마다 데이터 다시 로드
    fetchSortedData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className={styles.bestitemsContainer}>
      <h1 className={styles.sectionTitle}>베스트 상품</h1>
      <div className={styles.bestItemsCardSection}>
        {itemList?.map((item) => (
          <BestItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}
