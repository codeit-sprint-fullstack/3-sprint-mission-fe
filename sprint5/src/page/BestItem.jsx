import React, { useEffect, useState } from "react";
import { GetProducts } from "../api/GetProductList.js";
import ItemCard from "./itemCard.jsx";

function BestItemSection() {
  const [itemList, setItemList] = useState([]);

  const data = async ({ orderBy, pageSize }) => {
    const products = await GetProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    data();
  }, []);

  //map 오류 수정중입니다
  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="bestItemMap">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemSection;
