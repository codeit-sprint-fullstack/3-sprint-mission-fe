import Prods from "../../component/Prods/index.jsx";

// 판매 중인 상품 렌더링
const ProductSort = ({ sort }) => {
  return sort.map((prod) => {
    return (
      <Prods
        key={prod.id}
        price={prod.price}
        images={prod.images}
        name={prod.name}
        favoriteCount={prod.favoriteCount}
      />
    );
  });
};

export default ProductSort;