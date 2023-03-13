import * as React from 'react';

const ColofulMsg = (props) => {
  console.log(props);
  const { color, message } = props;

  // propsで受け取ったcolorと、以下のcolorは同じ名前なので、省略することができる
  // 本来は【color = color】と記載する
  const contentDefaultStyle = {
    color,
    fontSize: '12px',
  };

  // pタグの中でjavascriptを書きたい場合は{}で括る
  return (
    <React.Fragment>
      <p style={contentDefaultStyle}>ColofulMsgです</p>
      <p style={contentDefaultStyle}>{message}をpropsで受け取りました</p>
    </React.Fragment>
  );
};

export default ColofulMsg;
