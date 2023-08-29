import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Markdown from 'react-markdown';
import Header from './Header';
import Flowchart from '../containers/Flowchart';
import MoveText from '../containers/MoveText';
import MovePicRightSide from '../containers/MovePicRightSide';
import followerCopy from ''
import moves from '../static_data/moves.json';
import '../sass/style.scss';

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
        <Routes>
          <Route
            path="/"
            exact
            element={(
              <div className="PageFlowchart">
                <div className="row-above margin-btm-1vh">
                  <Flowchart />
                  <MovePicRightSide />
                </div>
                <MoveText />
              </div>
            )}
          />
          <Route
            path="followers"
            element={(
              <div className="PageFollowers">
                <Markdown>
                  {  }
                </Markdown>
              </div>
            )}
          />
        </Routes>

      </div>
    );
  }
}

export default App;
