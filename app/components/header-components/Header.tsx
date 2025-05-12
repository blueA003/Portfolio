import React from 'react'
import "@/styles/header.css"
import NavBtn from './NavBtn'


export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <nav className='nav-container'>
          <div>
            <NavBtn targetId="header" label="PMS" />
          </div>
          <div>
            {/* <NavBtn targetId="header" label="PMS" /> */}
            <NavBtn targetId="about" label="ABOUT" />
            <NavBtn targetId="skills" label="SKILLS" />
            <NavBtn targetId="project" label="PROJECT" />
          </div>
        </nav>
        
      </header>
      <div className='container'>
        <h1 className='header-title-font'>
          안녕하세요
          <br/>
          주니어 프론트엔드 개발자
          <br/>
          박민석입니다
        </h1>
      </div>
    </div>
  )
}
