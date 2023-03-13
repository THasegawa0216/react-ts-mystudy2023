import * as React from 'react';
import { StrictMode } from 'react';
import './style.css';

export default function LikeButtonComp() {
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
