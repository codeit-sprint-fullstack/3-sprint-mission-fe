import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './error-page';
import './index.css';
import { getProductList } from './apis/products.ts';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      const bestItems = await getProductList({
        page: 1,
        pageSize: 4,
        orderBy: 'favorite',
      });
      const sellingItems = await getProductList({ page: 1, pageSize: 10 });
      return { bestItems, sellingItems };
    },
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Theme accentColor="blue" radius="large">
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>,
  );
} else {
  console.error('No root element found');
}
