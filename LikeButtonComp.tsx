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
  return (
    <React.Fragment>
      <span className="likeButton">いいね♥{count}</span>
    </React.Fragment>
  );
}
