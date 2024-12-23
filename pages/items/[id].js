import styles from "@/styles/items.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import UpdateDropDown from "@/components/UpdateDropDown";
import Comment from "@/components/comment/Comment";
import { useRouter } from "next/router";
import codeitAxios from "@/lib/codeitAxios";
import { useEffect, useState } from "react";
import ItemDetail from "@/components/itemDetail/ItemDetail";

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const pathname = router.pathname;
  const isArticle = pathname.startsWith("/article");

  const [product, setProduct] = useState({});

  async function getProduct() {
    try {
      if (!id) return console.log(`${id} does not exist`);
      const response = await codeitAxios.get(`/products/${id}`);
      const product = response.data ?? {};
      setProduct(product);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (id) getProduct();
  }, [id]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.main}>
            {/* 상품 정보 */}
            <ItemDetail product={product} />
            {/* 문의 리스트 */}
            <Comment id={id} isArticle={isArticle} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
