import { useEffect, useState } from 'react';
import { getProductId } from '../lib/newPandaMarketApi.js';

function useItemId(productId) {
  const [productDetail, setProductDetail] = useState([]);

  const handleLoadProductDetail = async (productId) => {
    if (!productId) return;
    try {
      const data = await getProductId(productId);
      setProductDetail(data);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  };

  useEffect(() => {
    handleLoadProductDetail(productId);
  }, [productId]);

  return { productDetail };
}

export default useItemId;
