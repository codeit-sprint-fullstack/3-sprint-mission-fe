import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage/index.jsx';
import HomePage from './pages/HomePage/index.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import RegisterItemPage from './pages/RegisterItemPage/index.jsx';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items' element={<ItemsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterItemPage />} />
        {/* <Route path='/community' element={<CommunityFeedPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
