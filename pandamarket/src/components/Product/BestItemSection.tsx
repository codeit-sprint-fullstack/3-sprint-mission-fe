import { useState, useEffect } from "react";
import BestItemCard from "./BestItemCard";
import axiosInstance from "@/lib/axios";
import styles from "./ItemSection.module.css";

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const getPageSize = (): number => {
  const width = window.innerWidth;
  if (width < 744) return 1;
  if (width < 1280) return 2;
  return 4;
};

export default function BestItemSection() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState<number>(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }: { orderBy: string; pageSize: number }) => {
    try {
      const response = await axiosInstance.get("/products", {
        params: { orderBy, pageSize },
      });
      setItemList(response.data.list);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener("resize", handleResize);

    fetchSortedData({ orderBy: "favorite", pageSize });

    return () => window.removeEventListener("resize", handleResize);
  }, [pageSize]);

  return (
    <div className={styles.bestitemsContainer}>
      <h1 className={styles.sectionTitle}>베스트 상품</h1>
      <div className={styles.bestItemsCardSection}>
        {itemList.map((item) => (
          <BestItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}
