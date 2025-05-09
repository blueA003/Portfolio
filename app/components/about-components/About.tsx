import React from 'react';
import "@/styles/Info.css"
import "@/styles/font.css"
import { AiOutlineUser } from "react-icons/ai";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import AboutInfo from './AboutInfo';


export default function About() {
  return (
   <div id='about' className='container'>
      <h3 className='titleFont'>
        ABOUT
      </h3>
      <div className="info-container">
        <div className="info">
          <AboutInfo icon={AiOutlineUser} info="name" infoKey="이름" />
        </div>
        <div className="info">
          <AboutInfo icon={LiaBirthdayCakeSolid} info="birthdate" infoKey="생년월일" />
        </div>
        <div className="info">
          <AboutInfo icon={IoLocationOutline} info="location" infoKey="주소" />
        </div>
        <div className="info">
          <AboutInfo icon={BsTelephone} info="phone" infoKey="연락처" />
        </div>
        <div className="info">
          <AboutInfo icon={TfiEmail} info="email" infoKey="이메일" />
        </div>
        <div className="info">
          <AboutInfo icon={RiGraduationCapLine} info="university" infoKey="학력" />
        </div>
      </div>
    </div>
  )
}