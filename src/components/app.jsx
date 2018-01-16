import React from 'react';
import Header from './Header';
import Flowchart from '../containers/Flowchart';
import moves from '../moves.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.imgChange = this.imgChange.bind(this);
  }

  componentDidMount() {
    // preload images
    moves.forEach(move => {
      document.createElement('img').src = move.url;
    });
  }

  imgChange(val) {
    this.setState({ value: val });
    // console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  render() {
    const moveImgStyle = {
      backgroundImage: `url(${moves[this.state.value].url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: 'white'
    }

    return (
      <div className="container-fluid" id="big-container">
        <Header />
        <div className="row-above margin-btm-1vh">
          <div className="BS col-xs-12 col-sm-8" id="left">
            <Flowchart />
          </div>
          <div
            className="BS col-xs-6 col-sm-4"
            id="right"
            style={moveImgStyle}
          />
        </div>
        <div id="text" className="BS col-xs-12">
          <p>
            <img id="move" alt="" src={moves[this.state.value].url} className="img-responsive" />
            <span id="moveTips">{moves[this.state.value].tips}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default App;
