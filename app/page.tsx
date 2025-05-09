import React from 'react'
import Header from './components/header-components/Header'
import Skill from './components/skill-components/Skill'
import Footer from './components/Footer'
import About from './components/about-components/About'

export default function page() {
  return (
    <div>
      <Header/>
      <About/>
      <Skill/>
      <Footer/>
    </div>
  )
}
//  style={{padding: "64px 24px", margin: "0px auto", width: "1140px", height: '100%'}}