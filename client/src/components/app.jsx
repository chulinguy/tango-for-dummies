//import Go from 'gojs';
import React from 'react';
import _ from 'underscore';

import Header from './Header.jsx';
import Flowchart from "./Flowchart.jsx";
import moves from './moves.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
    this.imgChange = this.imgChange.bind(this);
  }

  imgChange(val){
    //set the value key of this.state to new value
    this.setState({value: val});
    console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <div className='row' id='left-right'>
          <div className='col-xs-12 col-sm-8' id='left'>
            <Flowchart imgChange={this.imgChange}/>
          </div>
          <div className='col-xs-12 col-md-4' id='right'>
            <img id='move' src={moves[this.state.value]['url']} className='img-responsive'/>
          </div>
        </div>
        <div className='row' id='texts'>
          <div className='col-xs-12'>
            <pre id='moveDesc'>{moves[this.state.value]['description']}</pre>
            <pre id='moveTips'>{moves[this.state.value]['tips']}</pre>
          </div>
        </div>
      </div>
    )
  }
}

export default App; 