import './App.css';
import LandingPage from './Landing.js';
import ProductPage from './ProductDefault.js';
import Registration from './Register.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

 
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="items" element={<ProductPage/>} />
          <Route path="registration" element={<Registration/>} />
          <Route path="items/registration" element={<Registration/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
