import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moves from '../moves.json';

const MoveText = ({ value, favMoves }) => (
  <div id="text" className="BS col-xs-12">
    <img id="move" alt="" src={moves[value].url} className="img-responsive" />
    {favMoves.includes(value) ? <span className="glyphicon glyphicon-heart float-right" /> : <span className="glyphicon glyphicon-heart-empty float-right" />}
    <p id="moveTips">{moves[value].tips}</p>
  </div>
);

const mapStateToProps = state => ({
  value: state.imgReducer,
  favMoves: state.favReducer
});

MoveText.propTypes = {
  value: PropTypes.string.isRequired,
  favMoves: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps)(MoveText);
