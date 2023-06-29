import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthProvider } from './contexts/AuthContext';
import { CategoryProvider } from './contexts/searchCategories';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
     <CategoryProvider>
      <App />
     </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>
);

