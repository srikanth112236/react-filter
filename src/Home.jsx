import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Bounce, Fade, Slide} from 'react-awesome-reveal'
import CoursesMain from './components/services/CoursesMain';
const Home = () => {
  return (
    <div>
      <Header/>
      <Fade delay={1e3} triggerOnce cascade damping={1e-1}>
        <CoursesMain/>
      </Fade>

      <Footer/>
    </div>
  )
}

export default Home