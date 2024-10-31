// src/App.js
import React from 'react';
import Header from './Header'; 
import BestProducts from './components/Bestproducts';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <BestProducts />
      <Products /> 
      <Footer />
      {/* 다른 컴포넌트들이 이 아래에 추가될 예정 */}
    </div>
  );
}

export default App;
