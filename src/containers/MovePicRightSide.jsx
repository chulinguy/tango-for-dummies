import React from 'react';
import { connect } from 'react-redux';
import moves from '../moves.json';
import store from '../store';

const MovePicRightSide = () => {
  const currentValue = store.getState().imgReducer;
  const moveImgStyle = {
    backgroundImage: `url(${moves[currentValue].url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: 'white'
  }
  return (
    <div
      className="BS col-xs-6 col-sm-4"
      id="right"
      style={moveImgStyle}
    />
  );
}

export default connect()(MovePicRightSide);
