import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './error-page';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Theme accentColor="blue">
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>,
  );
} else {
  console.error('No root element found');
}
