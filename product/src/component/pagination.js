

// import './page.css'
// import {getBestProduct} from './apis.js';

// const pagination = () => {
//     const [cursor, setCursor]= useState();

//     const handleLoad = async (options) => {
//         const {
//             products,
//             paging:{nextCursor},
//         } = await getBestProduct(options);
//         if (!options.cursor) {
//             set
//         }
        
//     }

// }


// const [cursor, setCursor] =useState();

// const handleloadPage = async (options) => {
//   const {
//     products,
//     paging: {nextCursor},
//     } = await getBestProduct(options);
//     if(!options.cursor){
//       setItems(products.list);
//     }else{
//       setItems((prevItems) => [...prevItems, ...products.list])
//     }
//     setCursor(nextCursor)
// };

// const handleLoadMore = () => {
//   handleLoad({
//     order,
//     cursor,
//   });
// }


// export default Paging;