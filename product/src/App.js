import './App.css';
import pandaLogo from './image/panda-market-logo.png';
import facebook from './image/facebook.png';
import twitter from './image/twitter.png';
import instagram from './image/instagram.png';
import youtube from './image/youtube.png';
import vector from './image/Vector.png';
import Box from './component/choose.js';
import {getProduct} from './apis.js';
import {useEffect, useState} from 'react';
import BestProduct  from './component/bestproduct.js';
import left from './image/left.png';
import right from './image/right.png';

function App() {

  const [items, setItems] = useState([]);
    const handleLoad = async () => {
      try {
        const product = await getProduct();
        // { list, totalCount } 
        setItems(product.list);
      } catch(err) {
        console.log('err', err)
      }
     };


     useEffect(
      ()=> {
       handleLoad();
    },[])


  return (
    <div>
      <header className="headerPart">
        <div className ="logoPart">
          <img className='img' src={pandaLogo} alt="로고이미지"/>
          <p className='text'>자유게시판</p>
          <p className='text'>중고마켓</p>
        </div>
        <div>
          <button className='login'>로그인</button>
        </div>
      </header>
      <div>
        <div className='bestProduct'>
          <h1 className='title'>베스트 상품</h1>
          <p></p>
          <p></p>
        </div>
          <BestProduct products={items}/>
        <div className='bunch'>
          <div>
            <h1 className='title'>판매 중인 상품</h1>
          </div>
          <div className='bundle'>
            <div className='search'>
              <img className='vectorImg' src={vector} alt='돋보기' />
              <input className='enterInput' type="text" placeholder='  검색할 상품을 입력해주세요.'/>
            </div>
            <button className='register'>상품 등록하기</button>
          </div>
        </div>
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
      <footer className='footer'>
      <div>©codeit - 2024 </div>
      <div className='footermenu'>
          <a className='fline' href="privacy/privacy.html">Privacy Policy</a>
          <a className='fline' href="faq/faq.html">FAQ</a>
      </div>
      <div className="sns">
        <a href="https://www.facebook.com/">< img src={facebook} alt='facebook' width="20" /></a>
        <a href="https://twitter.com/"><img src={twitter} alt='twitter' width="20" /></a>
        <a href="https://www.youtube.com/"> <img src={youtube} alt='youtube' width ="20" /></a>
        <a href="https://www.instagram.com/"><img  src={instagram} alt='instagram' width ="20" /></a>
      </div>
  </footer>    
 </div>
  );
}

export default App;
