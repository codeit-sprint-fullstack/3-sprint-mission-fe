import './App.css';
import HeaderPart from './component/header.js';
import SellProduct from './component/sell.js';
import FooterPart from './component/footer.js';
import Box from './component/choose.js';
import left from './image/left.png';
import right from './image/right.png';
import Best from './component/best.js';

function App() {

 
  return (
    <div>
      <HeaderPart/>
      <div>
        <div className='bestProduct'>
          <h1 className='title'>베스트 상품</h1>
          <p></p>
          <p></p>
        </div>
        <Best/>
        <SellProduct/>
        <Box/>
      </div>
      <div className='pageBtn'>
        <button className='page'><img src={left} alt='왼쪽 화살표'/></button>
        <button className='page'>1</button>
        <button className='page'>2</button>
        <button className='page'>3</button>
        <button className='page'>4</button>
        <button className='page'>5</button>
        <button className='page'><img src={right} alt='오른쪽 화살표'/></button>
      </div>
      <FooterPart/>
 </div>
  );
}

export default App;
