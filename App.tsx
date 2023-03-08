import * as React from 'react';
import { StrictMode } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <LikeButton />
    </div>
  );
}

function LikeButton() {
  const count = 999;
  return <span className="likeButton">いいね♥{count}</span>;
}

export function AppGoodBtn() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export function AppGoodMsg() {
  return <h1>いいね！</h1>;
}

export function AppGoodMsgs() {
  return (
    <React.Fragment>
      <h1>h1いいね！</h1>
      <p>pいいね！</p>
    </React.Fragment>
  );
}
