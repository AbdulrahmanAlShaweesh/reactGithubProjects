import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcome to Cyborg</h6>
            <h4 className="hero-title"><em>browse</em> Our Popular Game here</h4>
            
            <div className="main-buttom">
                <a href="browse.html">Browse Now</a>
            </div>
        </div>
    </div>
  )
}

export default Hero