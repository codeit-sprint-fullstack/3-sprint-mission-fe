import React from "react";
import Heart from "../assets/Heart.png";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img src={item.image[0]} alt={item.name} className="itemCardThumbnail" />
      <div className="itemSummary">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="favoriteCount">
          <Heart />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
