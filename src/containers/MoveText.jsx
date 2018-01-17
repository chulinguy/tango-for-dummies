import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moves from '../moves.json';

const MoveText = ({ value }) => (
  <div id="text" className="BS col-xs-12">
    <p>
      <img id="move" alt="" src={moves[value].url} className="img-responsive" />
      <span id="moveTips">{moves[value].tips}</span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  value: state.imgReducer
});

MoveText.propTypes = {
  value: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(MoveText);
