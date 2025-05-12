import React from 'react'
import "@/styles/project.css"

const projectArr = [{
  Title: "첫번째",
  SubTitle: "첫번째",
  Detail: "첫번째",
  Link:"https://gall.dcinside.com/mgallery/board/lists/?id=staraiload",
  LinkText: "붕괴 스타레일 갤러리"
},
{
  Title: "첫번째",
  SubTitle: "첫번째",
  Detail: "첫번째",
  Link:"https://gall.dcinside.com/mgallery/board/lists/?id=staraiload",
  LinkText: "붕괴 스타레일 갤러리"
},
{
  Title: "첫번째",
  SubTitle: "첫번째",
  Detail: "첫번째",
  Link:"https://gall.dcinside.com/mgallery/board/lists/?id=staraiload",
  LinkText: "붕괴 스타레일 갤러리"
},
{
  Title: "첫번째",
  SubTitle: "첫번째",
  Detail: "첫번째",
  Link:"https://gall.dcinside.com/mgallery/board/lists/?id=staraiload",
  LinkText: "붕괴 스타레일 갤러리"
}] as const;

export default function ProjectDetail() {
  
  return (
    <div>
      <div className='project-container'>
        {projectArr.map((item, index) => (
          <div key={index} className='project-detail-container'>
            <div className='project-title'>
            {item.Title}
            </div>
            <div className='project-sub-title'>
            {item.SubTitle}
            </div>
            <div className='project-detail'>
              {item.Detail}
            </div>
            <div className='project-link'>
              <a 
                href={item.Link} 
                target="_blank" 
              >
                {item.LinkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
