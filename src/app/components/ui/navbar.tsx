// Navbar.jsx
import React from 'react';
import Logo from '@/public/Logo'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', backgroundColor: '#ffffff', color: '#0d0c22' }}>
      
      <div style={{ display: 'flex', gap: '20px', paddingTop: '5px', paddingLeft: '14px', width:'560px' }}>
        <a href="/" style={{ color: '#0d0c22', textDecoration: 'none' , fontSize: '14px'}}>Find Talent</a>
        <a href="/about" style={{ color: '#0d0c22', textDecoration: 'none' , fontSize: '14px'}}>Inspiration</a>
        <a href="/contact" style={{ color: '#0d0c22', textDecoration: 'none' ,  fontSize: '14px'}}>Learn Design</a>
        <a href="/design" style={{color : '#0d0c22,', textDecoration:'none' ,  fontSize: '14px'}}> Jobs</a>
        <a href="/design" style={{color : '#0d0c22,', textDecoration:'none' ,  fontSize: '14px'}}> Go Pro</a>
      </div>

      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Logo</div>

      <div style={{fontSize: '14px', paddingLeft:'10px', display: 'flex', gap: '20px'}}>
        
        <a href="/" style={{color: '#0d0c22', textDecoration: 'none' , fontSize: '14px'}}>Log In</a>
        <a href="/" style={{color: '#0d0c22', textDecoration: 'none' , fontSize: '14px'}}>Sign Up</a>
      </div>
      
    </div>
  );
};

export default Navbar;
