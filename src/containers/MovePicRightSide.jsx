import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moves from '../static_data/moves.json';

const MovePicRightSide = ({ value }) => {
  const moveImgStyle = {
    backgroundImage: `url(${moves[value].url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: 'white'
  };
  return (
    <div
      className="BS col-xs-6 col-sm-4"
      id="right"
      style={moveImgStyle}
    />
  );
};

MovePicRightSide.propTypes = {
  value: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  value: state.imgReducer
});

export default connect(mapStateToProps)(MovePicRightSide);
