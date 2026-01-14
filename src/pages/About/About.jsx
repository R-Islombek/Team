import React from 'react'
import Jang from './assets/jang.svg'
import Jang2 from './assets/Jang2.png'
import './About.css'

const About = () => {
  return (

    <div className="about">
      <div className="content">
        <div className="about-container">
          <ul>
            <li className="text">
              <a href="#" className="about__link">Home </a><span className='about__span'> About us</span>
              <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <button className="btn">Get in touch →</button>
            </li>

            <li className="image">
              <img
                src={images[current]}
                alt="About illustration"
                className="float-img"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default About