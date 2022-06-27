import React from 'react'

const Hero = ({title, subtitle}) => {
  return (
    <div>
        <section className="hero-section">
          <div className="container">
            <div className="hero-box">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero