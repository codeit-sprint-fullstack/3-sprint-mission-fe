import React from 'react'
import HeroSection from '../components/Main/HeroSection';
import PopularProducts from '../components/Main/PopularProducts';
import SearchSection from '../components/Main/SearchSection';
import RegisterProduct from '../components/Main/RegisterProduct';
import WeAreSection from '../components/Main/WeAreSection';

function Main() {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <SearchSection />
      <RegisterProduct />
      <WeAreSection />
    </>
  )
}

export default Main