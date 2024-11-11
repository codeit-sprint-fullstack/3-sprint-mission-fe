import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Items from './pages/Items';
import Community from './pages/Community';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Registration from './pages/Registration';
// import ApiComparisonTest from './pages/ApiComparisonTest';
import './App.css';

function AppContent() {
  const location = useLocation();

  // Nav와 Footer를 제외할 경로 목록
  const hideHeaderFooterPaths = ['/login', '/signup'];

  return (
    <>
      {!hideHeaderFooterPaths.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Items />} />
        <Route path="/community" element={<Community />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/test" element={<ApiComparisonTest />} /> */}
      </Routes>
      {!hideHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;