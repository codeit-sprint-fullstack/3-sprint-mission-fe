import './App.css';
import HeaderPart from './component/header.js';
import MainPart from './component/mainPart.js';
import FooterPart from './component/footer.js';
import Pagebtn from './component/pageBtn.js';


function App() {

 
  return (
    <div>
      <HeaderPart/>
      <MainPart/>
      <Pagebtn/>
      <FooterPart/>
    </div>
  );
}

export default App;
