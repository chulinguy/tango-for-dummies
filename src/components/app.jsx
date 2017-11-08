import React from 'react';
import ReactHover from 'react-hover';
// import _ from 'underscore';

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
    this.setState({value: val});
    // console.log('imgChange is invoked, state.value = ', this.state.value)
  }

  render() {
    return (
      <div className='container-fluid'>
        <Header />
          <div className='BS col-xs-12 col-sm-8' id='left'>
            <Flowchart 
              imgChange={this.imgChange}
            />
          </div>
          <div className='BS col-xs-6 col-md-4' id='right'>
            <img id='move' src={moves[this.state.value]['url']} className='img-responsive'/>
          </div>
          <div className='BS col-xs-6 col-md-12'>
            <pre id='moveTips'>{moves[this.state.value]['tips']}</pre>
          </div>
      </div>
    )
  }
}

export default App; 