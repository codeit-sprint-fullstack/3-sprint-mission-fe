import { useEffect, useState } from "react";
import React from "react";

const Pagination = ({limit, currentPage, onPageChange}) => {
    const [pageCount, setPageCount]= useState(0);
    const [ pages, setPages] = useState([]);

    useEffect(() => {
        fetch(`https://panda-market-api.vercel.app/products`)
        .then(
            res =>
            {
                const length = res.formData.length;
                const tmpCnt = Math.ceil(length/limit);
                setPageCount(tmpCnt);
                const tmpPages = Array.from({length: tmpCnt}, (v, i) => i+1);
                setPages(tmpPages);
            }
        )
        .catch(err => console.log(err));
    }, [])

    if(pageCount ==1) return null;

    return (
        <nav>
            <ul >
                { pages.map(page => {
                    if(pages.length > 0){
                    return (
                        <li 
                            className={currentPage == page ? ${styles.active} ${styles.pageLi} : styles.pageLi}
                            key={page} 
                            onClick={() => {onPageChange(page)}}>
                            {page}
                        </li>
                    )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Pagination

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