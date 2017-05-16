import './index.css';
import App from './App';
import React from 'react';
import mySagas from './sagas';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySagas);

store.dispatch({type:"LOAD_MUSEUM_DATA"});

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
