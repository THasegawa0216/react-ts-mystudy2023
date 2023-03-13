import * as React from 'react';
import { createRoot } from 'react-dom/client';

import AppGoodBtn from './LikeButtonComp';
import GoodMsgComp from './components/GoodMsgComp';
import ColofulMessage from './components/PropsSample1';
// startログ
console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

const root1 = createRoot(document.getElementById('root_1'));
const root2 = createRoot(document.getElementById('root_2'));
const root3 = createRoot(document.getElementById('root_3'));

// root_1にAppGoodBtnで作成したいいねボタンを配置する(JSX記法)
root1.render(<AppGoodBtn />);
root2.render(<GoodMsgComp />);
root3.render(<ColofulMessage color="blue" message="引数" />);

// endログ
console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
