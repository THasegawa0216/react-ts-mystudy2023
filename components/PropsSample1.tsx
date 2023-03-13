import * as React from 'react';

const ColofulMsg = (props) => {
  console.log(props);
  const { color, message } = props;
  const contentDefaultStyle = {
    color,
    fontSize: '12px',
  };

  return (
    <React.Fragment>
      <p style={contentDefaultStyle}>ColofulMsgです</p>
      <p style={contentDefaultStyle}>{message}をpropsで受け取りました</p>
    </React.Fragment>
  );
};

export default ColofulMsg;
