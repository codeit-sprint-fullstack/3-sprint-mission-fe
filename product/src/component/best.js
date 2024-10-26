import React from "react";
import { useState, useEffect } from "react";
import BestProduct from "./bestproduct.js";
import { getProduct } from "../apis.js";

const Best = () => {
    const [order, setOrder] =useState('favoriteCount');
    const [items, setItems] = useState([]);

    const sortedItems = items.sort((a,b)=> b[order]-a[order]);

    const handleLoad = async (orderQuery) => {
        try {
          const product = await getProduct(orderQuery);
          // { list, totalCount } 
          setItems(product.list);
        } catch(err) {
          console.log('err', err)
        }
       };

       useEffect(()=> {
        handleLoad(order);
     }, [order]);

     return(
        <BestProduct products={sortedItems} />
     )

}

export default Best;