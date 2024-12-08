import React, {Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import {SplashScreen} from './components';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
