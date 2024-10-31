import React from "react";
import { useState, useEffect } from "react";
import './choose.css';
import ProductList from './product.js';
import {getProduct} from '../apis.js';


const Box = () => {

    const [currentValue, setCurrentValue] = useState("최신순");
    const [order, setOrder] = useState('createAt');
    const [items, setItems] = useState([]);

    const handleOnChangeSelectValue = (e) => {
        setCurrentValue(e.target.value);
        if(e.target.value === '최신순'){
          setOrder('createAt');
        }else if(e.target.value === '좋아요순'){
          setOrder('favoriteCount');
        }
    }

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

    return (
       <div className='sort'>  
            <select className="sortBtn" onChange={handleOnChangeSelectValue} value={currentValue}>
                <option className="option" onChange = {handleOnChangeSelectValue}>최신순</option>
                <option className="option" onChange = {handleOnChangeSelectValue} >좋아요순</option>
            </select>    
            <ProductList products = {sortedItems}/>
        </div>
    );
}

export default Box;
