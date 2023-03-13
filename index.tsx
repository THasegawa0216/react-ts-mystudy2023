import * as React from 'react';
import { createRoot } from 'react-dom/client';

import AppGoodBtn from './LikeButtonComp';
import GoodMsgComp from './components/GoodMsgComp';
import ColofulMessage1 from './components/PropsSample1';
import ColofulMessage2 from './components/PropsSample2';
// startログ
console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

const root1 = createRoot(document.getElementById('root_1'));
const root2 = createRoot(document.getElementById('root_2'));
const root3 = createRoot(document.getElementById('root_3'));
const root4 = createRoot(document.getElementById('root_4'));

// root_1にAppGoodBtnで作成したいいねボタンを配置する(JSX記法)
root1.render(<AppGoodBtn />);
root2.render(<GoodMsgComp />);
root3.render(<ColofulMessage1 color="blue" message="文字色blue" />);
root4.render(<ColofulMessage2 color="red" message="文字色red" />);

// endログ
console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
