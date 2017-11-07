import React from 'react';
import moves from './moves.json';
import ReactHover from 'react-hover';

const options = {
  followCursor:true,
  shiftX: 20,
  shiftY: 0
}

class ImageMapHover extends React.Component {
  constructor (props) {
    super(props);
  }

  render(){

    return(
      <ReactHover
        options={options}>
      <ReactHover.Trigger type='trigger'>
      <area 
        onClick={this.props.imgChange.bind(null,this.props.number)} 
        alt={this.props.title}
        coords={this.props.coords} shape="rect"/>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <div> {moves[this.props.number]['description']} </div>
      </ReactHover.Hover>
    </ReactHover>
    )}
}

export default ImageMapHover; 
