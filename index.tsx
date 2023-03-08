import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// startログ
console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

const root1Element = document.getElementById('root_1');

const AppGoodBtn = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

const AppGoodMsg = () => {
  return <h1>いいね！</h1>;
};

const AppGoodMsgs = () => {
  return (
    <React.Fragment>
      <h1>h1いいね！</h1>
      <p>pいいね！</p>
    </React.Fragment>
  );
};

const root = createRoot(root1Element);
const root2 = createRoot(document.getElementById('root_2'));
const root3 = createRoot(document.getElementById('root_3'));

// root_1にAppGoodBtnで作成したいいねボタンを配置する(JSX記法)
root.render(<AppGoodBtn />);
root2.render(<AppGoodMsg />);
root3.render(<AppGoodMsgs />);

// endログ
console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
