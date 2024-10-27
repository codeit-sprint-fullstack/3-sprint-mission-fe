import './App.css';
import HeaderPart from './component/header.js';
import MainPart from './component/mainPart.js';
import FooterPart from './component/footer.js';
import Pagebtn from './component/pageBtn.js';
import Pagination from './component/pagination.js';


function App() {

 
  return (
    <div>
      <HeaderPart/>
      <MainPart/>
      <Pagination/>
      <FooterPart/>
    </div>
  );
}

export default App;
