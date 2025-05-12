import React from 'react';
import "@/styles/about.css"
import "@/styles/font.css"
import { AiOutlineUser } from "react-icons/ai";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import AboutInfo from './AboutInfo';
import AboutCredits from './AboutCredits';

const AboutArray = [{
  icon: AiOutlineUser,
  info: "name",
  infoKey: "이름"
},
{
  icon: LiaBirthdayCakeSolid,
  info: "birthdate",
  infoKey: "생년월일"
},
{
  icon: IoLocationOutline,
  info: "location",
  infoKey: "주소"
},
{
  icon: BsTelephone,
  info: "phone",
  infoKey: "연락처"
},
{
  icon: TfiEmail,
  info: "email",
  infoKey: "이메일"
},
{
  icon: RiGraduationCapLine,
  info: "university",
  infoKey: "학력"
}] as const;

export default function About() {
  return (
   <div id='about' className='container'>
      <h3 className='titleFont'>
        ABOUT
      </h3>
      <div className="info-container">
        {AboutArray.map((item, index) => (
          <div key={index} className="info">
            <AboutInfo icon = {item.icon} info = {item.info} infoKey={item.infoKey}/>
          </div>
        ))}
      </div>
      <h3 className='titleFont'>
        CREDIT
      </h3>
      <AboutCredits/>
    </div>
  )
}
