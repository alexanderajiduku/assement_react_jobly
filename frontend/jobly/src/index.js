import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container); // create a root.
root.render(<App />);

// Service Worker setup remains the same
serviceWorker.unregister();
