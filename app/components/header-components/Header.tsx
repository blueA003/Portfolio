import React from 'react'
import "@/styles/header.css"
import NavBtn from './NavBtn'


export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <div className='nav-container'>
          <NavBtn targetId="header" label="PMS" />
          <nav>
            <NavBtn targetId="about" label="ABOUT" />
            <NavBtn targetId="skills" label="SKILLS" />
            <NavBtn targetId="footer" label="Footer" />
          </nav>
        </div>
        
      </header>
      <div className='container'>
        <h1 className='titleFont'>
          안녕하세요
          <br/>
          주니어 프론트엔드 개발자 박민석입니다
        </h1>
      </div>
    </div>
  )
}
