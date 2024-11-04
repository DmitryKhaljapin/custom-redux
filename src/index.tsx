import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from './redux/Provider';
import { store } from './store';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>)