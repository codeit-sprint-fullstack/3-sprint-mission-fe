import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './globalStyles.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import ItemsPage from './pages/ItemsPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App>
        <Routes>
          <Route path="/items" element={<ItemsPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);
