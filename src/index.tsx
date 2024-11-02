import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from './context/app.context';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider><App /></Provider>)