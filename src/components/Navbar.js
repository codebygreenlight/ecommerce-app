import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'white',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '2rem',
        marginLeft: '2rem',
        maxWidth: '1400px',  // Match main container width
        width: '100%',
        padding: '0 15px',   // Match main container padding
        margin: '0 auto'     // Center the content
      }}>
        <img src="/logo.jpg" alt="Logo" style={{ height: '40px' }} />
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/login" style={linkStyle}>Login</a>
          <a href="/register" style={linkStyle}>Register</a>
        </div>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  ':hover': {
    color: '#666'
  }
};

export default Navbar; 