import React from 'react';
import moves from './moves.json';
import ReactHover from 'react-hover';

class ImageMapHover extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      followCursor:true,
      shiftX: 20,
      shiftY: -70,
      height: 0,
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.props.number == 9 & window.innerWidth < 768  ){
      this.setState ({
        shiftY:-115
      })
    }
  }

  render(){

    return(
      <ReactHover
        options={this.state}>
      <ReactHover.Trigger type='trigger'>
      <area 
        onClick={this.props.imgChange.bind(null,this.props.number)} 
        alt={this.props.title}
        coords={this.props.coords} shape="rect"/>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <div className='hover-div'> {moves[this.props.number]['description']} </div>
      </ReactHover.Hover>
    </ReactHover>
    )}
}

export default ImageMapHover; 
