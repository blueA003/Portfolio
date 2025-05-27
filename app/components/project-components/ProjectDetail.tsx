import React from 'react'
import "@/styles/project.css"


const projectArr = [{
  Title: "Portfolio",
  SubTitle: "포트폴리오 제작",
  Detail: "이 프로젝트는 Next.js, React, TypeScript를 사용하여 개발한 개인 웹사이트입니다.",
  Link:"https://github.com/blueA003/Portfolio",
  LinkText: "https://github.com/blueA003/Portfolio",
  Skills:"Next.js, React, TypeScript, AWS"
},
{
  Title: "HSR Quize",
  SubTitle: "붕괴: 스타레일 퀴즈 제작",
  Detail: "검색, 정렬, 페이지 이동은 useRouter와 useSearchParams를 활용한 쿼리 파라미터 기반 라우팅으로 구현하였으며, 정답 처리와 점수 관리는 useState와 useEffect를 이용해 구성하였습니다.",
  Link:"https://www.pmshsrquiz.com",
  LinkText: "https://www.pmshsrquiz.com",
  Skills:"Next.js, React, TypeScript, AWS"
},
{
  Title: "Next.js-Learn",
  SubTitle: "Next.js 학습 프로젝트",
  Detail: "이 프로젝트는 인프런 강의를 따라하며 비동기 통신과 Next.js의 기초적인 문법을 학습했습니다. ",
  Link:"https://github.com/blueA003/start-nextjs",
  LinkText: "https://github.com/blueA003/start-nextjs",
  Skills:"Next.js, React, JavaScript, Axios"
},
{
  Title: "React-Learn",
  SubTitle: "React 학습 프로젝트",
  Detail: "이 프로젝트는 인프런 강의를 따라하며 React의 기초를 학습했습니다",
  Link:"https://github.com/blueA003/react-todo-app",
  LinkText: "https://github.com/blueA003/react-todo-app",
  Skills:"React, JavaScript"
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
            <div className='project-skill'>
              {item.Skills}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
