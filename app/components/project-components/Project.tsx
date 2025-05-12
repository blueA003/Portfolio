import React from 'react'
import "@/styles/project.css"
import ProjectDetail from './ProjectDetail'

export default function Project() {
  return (
    <div id='project' className='container'>
      <h3 className='titleFont'>
        PROJECT
      </h3>
       <ProjectDetail/>
    </div>
  )
}
