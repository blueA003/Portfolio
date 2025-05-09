import React from 'react'
import introduction from "@/data/db.json";
import { IconType } from 'react-icons';

interface AboutInfoProps {
// ts에서 json 파일 값을 함수로 넣고 굴리려면 인터페이스로
// 타입을 저렇게 해야하나?
  icon: IconType;
  info: keyof typeof introduction.introduction;
  infoKey: string;
}

export default function AboutInfo({icon: Icon, info, infoKey: InfoKey}: AboutInfoProps) {
  const introductionData = introduction.introduction

  const infoValueSplit = info === "university" && typeof introductionData[info] === "string" 
    ? introductionData[info].split(' ') : introductionData[info];

  const infoValue = Array.isArray(infoValueSplit)
    ? infoValueSplit.map((value, index) => (
        <div key={index} style={{ display: "block" }}>
          {value}
        </div>
      )): infoValueSplit;
        
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: "28.38px"}}>
      <div>
        <Icon style={{fontSize: "40px"}}/>
      </div>
        <div style={{fontSize: "16px",fontWeight:'light'}}>
          <div style={{fontWeight:'bold'}}>{InfoKey}</div>
          {infoValue}
        </div>
    </div>
  );
}

    // return (
  //   <div style={{display: "flex", alignItems: "center"}}>
  //     <div style={{display:"inline-flex", alignItems: "center", gap:"8px"}}>
  //       <Icon style={{fontSize: "40px",}}/>
  //       <div style={{fontSize: "16px",fontWeight:'light'}}>
  //         <div style={{fontWeight:'bold'}}>{InfoKey}</div>
  //         {infoValue}
  //       </div>
  //     </div>
  //   </div>
  //   );
  // }

// import introduction from "@/data/introduction.json";
// import React from "react";
// import { IconType } from "react-icons";

// interface MyInfoProps {
//   icon: IconType;
//   info: keyof typeof introduction;
//   infoKey: string;
// }

// export default function MyInfo({ icon: Icon, info, infoKey }: MyInfoProps) {
//   const infoValue = introduction[info];

//   return (
//     <div className="flex items-start">
//       <Icon className="text-3xl text-gray-600" />
//       <div>
//         <div className="text-sm font-semibold text-gray-500">{InfoKey}</div>
//         <div className="text-lg font-medium">{infoValue}</div>
//       </div>
//     </div>
//   );
// }


//  style={{fontWeight:'semibold'}}
