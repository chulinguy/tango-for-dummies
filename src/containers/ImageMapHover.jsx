import React from 'react';
import ReactHover from 'react-hover';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moves from '../moves.json';
import { imgChange } from '../actions';

class ImageMapHover extends React.Component {
  constructor(props) {
    super(props)
    this.changeToSpecificImage = this.changeToSpecificImage.bind(this);
  }

  changeToSpecificImage() {
    this.props.clickNewMove(this.props.number);
  }

  render() {
    const ReactHoverOptions = {
      followCursor: true,
      shiftX: 20,
      shiftY: -70,
      height: window.innerHeight,
      width: window.innerWidth
    }
    if (this.props.number === '9' && window.innerWidth < 768) {
      ReactHoverOptions.shiftY = -115;
    }

    return (
      <ReactHover options={ReactHoverOptions}>
        <ReactHover.Trigger type="trigger">
          <area
            onClick={this.changeToSpecificImage} 
            onKeyPress={this.changeToSpecificImage}
            alt={this.props.title}
            coords={this.props.coords} 
            role="button"
            tabIndex={0}
            shape="rect"
          />
        </ReactHover.Trigger>
        <ReactHover.Hover type="hover">
          <div className="hover-div"> {moves[this.props.number].description} </div>
        </ReactHover.Hover>
      </ReactHover>
    )
  }
}

ImageMapHover.propTypes = {
  number: PropTypes.string.isRequired,
  coords: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickNewMove: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  clickNewMove: imgChange
};

export default connect(null, mapDispatchToProps)(ImageMapHover);

