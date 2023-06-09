import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from "react-redux"
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { pokemonsReducer } from './redux/reducers';
import { logger } from './redux/midelwers';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancer = composeAlt(applyMiddleware(thunk, logger));
const store = legacy_createStore(pokemonsReducer,composedEnhancer )
root.render(
< Provider store={store} >
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
