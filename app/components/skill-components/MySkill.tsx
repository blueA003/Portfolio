"use client";
import React, { useState } from 'react'
import skill from '@/data/db.json'
import "@/styles/chart.css"
import Modal from "./Modal";



export default function MySkill({ }) {
  const skillname = skill.skill;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({title: "", description: ""});

  const openModal = (name: string, text: string) => {
    setSelectedSkill({ title: name, description: text });
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="chart-container">
      {skillname.map((item, index) => (
        <div key={index} className="chart-row">
          <button 
          className="skill-name-alert"
          onClick={() => openModal(item.name, item.text)}
          >
            {item.name}
          </button>
          <div className="chart-name-bar">
            <div
              className="chart-name-bar-filled"
              style={{ width: `${item.percent}%` }}
            >
              {item.percent}%
            </div>
          </div>
        </div>
      ))}
      <Modal
        isOpen = {isModalOpen}
        onClose = {closeModal}
        title = {selectedSkill.title}
        description = {selectedSkill.description}
      />
    </div>
  );
}

//   return (
//     <div className='my-skill-container'>
//       <div className='skill-name-container'>
//         {skillname.map((item, index) => (
//           <div key={index} className='skill-name'>
//             {item.name || null}
//           </div>
//         ))}
//       </div>
//       <div className= 'skill-name-bar-container'>
//         {skillname.map((item ,index) => (
//           <div key={index} className='skill-name-bar'>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
