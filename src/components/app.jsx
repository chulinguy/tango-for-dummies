import React from 'react';
import Header from './Header';
import Flowchart from '../containers/Flowchart';
import MoveText from '../containers/MoveText';
import MovePicRightSide from '../containers/MovePicRightSide';
import moves from '../moves.json';

class App extends React.Component {
  componentDidMount() {
    // preload images
    moves.forEach(move => {
      document.createElement('img').src = move.url;
    });
  }

  render() {
    return (
      <div className="container-fluid" id="big-container">
        <Header />
        <div className="row-above margin-btm-1vh">
          <Flowchart />
          <MovePicRightSide />
        </div>
        <MoveText />
      </div>
    )
  }
}

export default App;
