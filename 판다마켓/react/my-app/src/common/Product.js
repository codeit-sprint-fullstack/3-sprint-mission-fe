// import "./product.css";
// import axios from "axios";
// import HeartImg from "../assets/img/ic_heart.png";
// import { useState, useEffect } from "react";
// import { getProductsApi } from "./api/api.js";
// import { Item } from "../components/Item.js";

// export function Product() {
//   const [products, setProducts] = useState([]);
//   // 1. api받아오고 : 초기부터 불러와야하니까 api는 useEffect안에서 불러오기
//   // 2. 받아온 데이터를 useState에 넣고,
//   // 3. 그거를 map돌려서 렌더링

//   useEffect(() => {
//     const settingProduct = async () => {
//       const data = await getProductsApi();
//       setProducts(data.list);
//     };
//     settingProduct();
//   }, []);

//   return (
//     <div>
//       <div className="product_inner">
//         <div className="best_product_inner">
//           <h2>베스트상품</h2>
//           <div className="item_box">
//             {products.map((item, index) => {
//               return (
//                 <Item
//                   key={index}
//                   name={item.name}
//                   price={item.price}
//                   imgUrl={item.images[0]}
//                   likeCount={item.likeCount}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
