import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import './index.css';
import App from './containers/App';
import 'tachyons'; 
import { searchRobots, requestRobots } from './reducers';

const store = configureStore({
    reducer: {
        searchRobots: searchRobots,
        requestRobots: requestRobots
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);