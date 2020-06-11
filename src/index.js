import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
