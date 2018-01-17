import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moves from '../moves.json';
// import store from '../store';

const MoveText = ({ value }) => {
  // const value = store.getState().imgReducer;
  return (
    <div id="text" className="BS col-xs-12">
      <p>
        <img id="move" alt="" src={moves[value].url} className="img-responsive" />
        <span id="moveTips">{moves[value].tips}</span>
      </p>
    </div>
  )
}

// MoveText.propTypes = {
//   value: PropTypes.string
// }

const mapStateToProps = state => ({
  value: state.imgReducer
});

export default connect(mapStateToProps)(MoveText);
