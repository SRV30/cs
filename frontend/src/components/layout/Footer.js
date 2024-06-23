import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
  };

  const separatorStyle = {
    color: 'white',
    margin: '0 0.5rem',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} City Smile Dental Clinic</p>
      <nav>
        <Link to="/about" style={linkStyle}>About</Link>
        <span style={separatorStyle}>|</span>
        <Link to="/photo" style={linkStyle}>Photo Library</Link>
      </nav>
    </footer>
  );
};

export default Footer;
