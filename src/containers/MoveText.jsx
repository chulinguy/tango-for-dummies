import React from 'react';
import { connect } from 'react-redux';
import moves from '../moves.json';
import store from '../store';

const MoveText = () => {
  const currentValue = store.getState().imgReducer;
  return (
    <div id="text" className="BS col-xs-12">
      <p>
        <img id="move" alt="" src={moves[currentValue].url} className="img-responsive" />
        <span id="moveTips">{moves[currentValue].tips}</span>
      </p>
    </div>
  )
}

export default connect()(MoveText);
