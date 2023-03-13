import * as React from 'react';

const ColofulMsg2 = (props) => {
  const contentDefaultStyle = {
    color: props.color,
    fontSize: '12px',
  };

  // pタグの中でjavascriptを書きたい場合は{}で括る
  return (
    <React.Fragment>
      <p style={contentDefaultStyle}>
        ColofulMsg2です（タグで括って記載したい場合の例）
      </p>
      <p style={contentDefaultStyle}>{props.message}をpropsで受け取りました</p>
    </React.Fragment>
  );
};

export default ColofulMsg2;
