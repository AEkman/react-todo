import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
    </header >
  );
}

const headerStyle = {
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10 px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
