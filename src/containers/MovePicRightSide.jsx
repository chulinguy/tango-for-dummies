import React from 'react';
import { connect } from 'react-redux';
import moves from '../moves.json';
// import store from '../store';

const MovePicRightSide = ({ value }) => {
  const moveImgStyle = {
    backgroundImage: `url(${moves[value].url})`,
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

const mapStateToProps = state => ({
  value: state.imgReducer
});

export default connect(mapStateToProps)(MovePicRightSide);
