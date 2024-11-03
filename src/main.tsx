import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './globalStyles.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import ItemsPage from './pages/ItemsPage.tsx';
import HomePage from './pages/HomePage.tsx';
import RegistrationPage from './pages/RegistrationPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);
