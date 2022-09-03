import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import { Provider } from 'react-redux';
import postsReducer from './slices/postsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
