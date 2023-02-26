import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
