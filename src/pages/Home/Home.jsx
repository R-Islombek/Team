import React from 'react'

import Hero from './Hero/Hero.jsx';
import Games from './Games/Games.jsx';
import Article from '../../Components/Article/Article.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx';
import Section from '../../Components/Section/Section.jsx';

const Home = () => {
  return (
  <>
      <Hero />
      <Games />
      <Article/>
      <Sidebar/>
      <Section/>
    </>
 


  )
}

export default Home