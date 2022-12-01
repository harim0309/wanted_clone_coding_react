import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './style/font.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import { useReducer } from 'react';
import rootReducer from './modules';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
