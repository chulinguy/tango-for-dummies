import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }



  render() {
    return (
      <nav className="navbar navbar-inverse" id='navbar1'>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Tango for Dummies</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="..">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Useful Info<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="flowchart">Tango Flowchart</a></li>
                <li><a href="leaders-starter">Leaders' Starter Guide</a></li>
                <li><a href="followers-starter">Followers' Starter Guide</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}



export default Header;