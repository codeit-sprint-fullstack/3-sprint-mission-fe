'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import productApi from '@/entities/product/productApi';
import { Product, ProductsResponse } from '@/entities/product/types';

export default function Home() {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const response = productApi.getProducts({ orderBy: 'favorite' });
      response.then((res) => setBestProducts<ProductsResponse>(res));
      // setBestProducts(response);
    } catch (error) {
      console.error('상품 조회에 실패하였습니다.', error);
    }
    console.log('Home 페이지가 마운트 되었습니다.');
    return () => {
      console.log('Home 페이지가 언마운트 되었습니다.');
    };
  }, []);
  return (
    <>
      <Header />
      <main>홈화면</main>
      {bestProducts.map((product) => (
        <div key={product.name}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Image
            src={product.images[0]}
            alt={product.name}
            width='50'
            height='40'
          />
        </div>
      ))}
      <Footer />
    </>
  );
}
