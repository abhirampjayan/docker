import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeatherContextProvider from './context/WeatherContext';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

root.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
