import { useParams } from "react-router-dom";

function Product() {
  // 구현 예정
  const { id } = useParams();

  return <div>{id}</div>;
}

export default Product;
