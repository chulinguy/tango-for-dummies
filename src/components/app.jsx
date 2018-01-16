import React from 'react';
import ReactHover from 'react-hover';
import Header from './Header.jsx';
import Flowchart from "./Flowchart.jsx";
import moves from './moves.json';
import { createStore } from 'redux'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
    this.imgChange = this.imgChange.bind(this);
  }

  imgChange(val){
    this.setState({value: val});
    // console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  componentDidMount(){
    //preload images
    moves.forEach(move => document.createElement("img").src = move.url);
  }

  render() {
    return (
      <div className='container-fluid' id='big-container'>
        <Header />
          <div className='row-above margin-btm-1vh'>
            <div className='BS col-xs-12 col-sm-8' id='left'>
              <Flowchart 
                imgChange={this.imgChange}
              />
            </div>
            <div className='BS col-xs-6 col-sm-4' id='right' 
            style={{backgroundImage: `url(${moves[this.state.value]['url']})`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"contain",
              backgroundColor: "white"
            }}>
            </div>
          </div>
          <div id='text' className='BS col-xs-12'>
            <p>
              <img id='move' src={moves[this.state.value]['url']} className='img-responsive'/>
              <span id='moveTips'>{moves[this.state.value]['tips']}</span>
            </p>
          </div>
      </div>
    )
  }
}

export default App; 