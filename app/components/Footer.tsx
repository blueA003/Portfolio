import React from 'react'

const footer = [{
  value: "이름",
  valueKey: "박민석"
},
{
  value: "주소",
  valueKey: "경기도 안양시"
},
{
  value: "연락처",
  valueKey: "010-2842-1184"
},
{
  value: "이메일",
  valueKey: "gogurye77@naver.com"
}]

export default function Footer() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div className='footer-container'>
        {footer.map((item, index) => (
          <div key={index} className='footer-text'>
            {item.value}: {item.valueKey}
          </div>
        ))}
      </div>
    </div>
  )
}
