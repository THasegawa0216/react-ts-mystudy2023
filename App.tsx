import * as React from 'react';
import './style.css';
import './App.css';

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
