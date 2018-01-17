import React from 'react';
import moves from '../moves.json';

const MoveText = () => (
  <div id="text" className="BS col-xs-12">
    <p>
      <img id="move" alt="" src={moves[this.state.value].url} className="img-responsive" />
      <span id="moveTips">{moves[this.state.value].tips}</span>
    </p>
  </div>
)

export default MoveText; 