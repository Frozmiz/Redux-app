import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App';
import rootReducer from "./reducers";

import './index.css';

// A la función createStore le hemos pasado el conjunto de reducers (rootReducer) con el objetivo de crear la store.
// A la función composeWithDevTools le pasamos la función applyMiddleware con la configuración de thunk.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));

// Provider incluirá en su interior el componente App para que recoja la store que acabamos de crear.
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

