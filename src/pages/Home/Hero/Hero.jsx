import React from 'react'
import "./Hero.css"
import Heroimg1 from "../Hero/img/hero1.png"
import Heroimg2 from "../Hero/img/hero2.png"
import Heroimg3 from "../Hero/img/hero3.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <div className="hero__box">
                    <p className="hero__text-name">Proved By prodesigner</p>
                    <h1 className='hero__title'>Work that we produce for our clients</h1>
                    <p className='hero__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className='hero__button'>Get more details</button>
                </div>
                <div className="hero__img">
                    <img src={Heroimg1} alt="hero-image" />
                </div>
                <div className="hero__image">
                    <img src={Heroimg2} alt="hero-image" />
                    <img src={Heroimg3} alt="hero-image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero