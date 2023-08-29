import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-inverse margin-btm-1vh">
    <Link to="/">Flowchart</Link>
    <Link to="followers">Followers tips - Chi edition</Link>
    <Link to="leaders">Leaders tips - Chi edition</Link>
  </nav>
);

export default Header;
