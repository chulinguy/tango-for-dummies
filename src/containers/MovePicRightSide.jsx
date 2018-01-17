import React from 'react';
import moves from '../moves.json';

const MovePicRightSide = () => {
  const moveImgStyle = {
    backgroundImage: `url(${moves[this.state.value].url})`,
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
  )
}

export default MovePicRightSide;
