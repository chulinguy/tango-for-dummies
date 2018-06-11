import React from 'react';

const Header = () => (
  <nav className="navbar navbar-inverse margin-btm-1vh">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a href="/" className="navbar-brand">Tango Flowchart</a>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        {/* <li className="active">Home</li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Useful Info<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="flowchart">Tango Flowchart</a></li>
            <li><a href="leaders-starter">Leaders' Starter Guide</a></li>
            <li><a href="followers-starter">Followers' Starter Guide</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </nav>
);
export default Header;
