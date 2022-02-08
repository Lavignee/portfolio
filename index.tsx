import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/Modules';
import './i18n';
import App from './src/App';

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);