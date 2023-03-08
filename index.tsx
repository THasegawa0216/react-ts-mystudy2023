import * as React from 'react';
import { createRoot } from 'react-dom/client';

import AppGoodBtn from './App';
import AppGoodMsg from './App';
import AppGoodMsgs from './App';

// startログ
console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

const root1 = createRoot(document.getElementById('root_1'));
const root2 = createRoot(document.getElementById('root_2'));
const root3 = createRoot(document.getElementById('root_3'));

// root_1にAppGoodBtnで作成したいいねボタンを配置する(JSX記法)
root1.render(<AppGoodBtn />);
root2.render(<AppGoodMsg />);
root3.render(<AppGoodMsgs />);

// endログ
console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
