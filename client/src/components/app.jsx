//import Go from 'gojs';
import React from 'react';
import _ from 'underscore';

import Header from './Header.jsx';
import Menu from './Menu.jsx'; 
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
      <div id='holder'>
        <Header />
        <Flowchart imgChange={this.imgChange}/>
        <img id='move' src={moves[this.state.value]['url']}/>
        <hr/>
        <pre id='moveDesc'>{moves[this.state.value]['description']}</pre>
        <pre id='moveTips'>{moves[this.state.value]['tips']}</pre>
      </div>
    )
  }
}

export default App; 