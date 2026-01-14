import React from 'react'
import "./Sidebar.css"
import { GoArrowRight } from "react-icons/go";
import Tell from "./images/tell.png";
import Komp from "./images/komp.png";
import Ps from "./images/ps4.png";
import Kim from "./images/kim.png";
import Nima from "./images/nima.png";
import Desk from "./images/desktop.png";

const Sidebar = () => {
  return (
    <>
    
         <div className='sidebar'>
            <div className='container'>
                <div className='sidebar__container'>
                    <h1 className='sidebar__title'>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h1>
                    <p className='sidebar__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s,</p>
                    <ul className='sidebar__list'>


                        <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Tell} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>Mobile Game Development</h1>
                                <GoArrowRight className='icon' />
                        </li>


                         <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Komp} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>PC Game Development</h1>
                                <GoArrowRight className='icon' />
                        </li>


                         <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Ps} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>PS4 Game Development</h1>
                                <GoArrowRight className='icon' />
                        </li>


                         <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Kim} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>AR/VR Solutions</h1>
                                <GoArrowRight className='icon' />
                        </li>


                         <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Nima} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>AR/ VR design</h1>
                                <GoArrowRight className='icon' />
                        </li>


                         <li className='sidebar__item'>
                               <span className='sidebar__span'>
                                <img className='sidebar__img' src={Desk} alt="" />
                                 </span>
                                <h1 className='sidebar__subtitle'>3D Modelings</h1>
                                <GoArrowRight className='icon' />
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    
    </>
  )
}

export default Sidebar