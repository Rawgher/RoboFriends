import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './containers/App';
import 'tachyons'; 
import { searchRobots } from './reducers';

const store = configureStore({reducer: {searchRobots}});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);