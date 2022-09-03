import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import { Provider } from 'react-redux';
import postsReducer from './slices/postsSlice';

const store = configureStore({ reducer: postsReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
