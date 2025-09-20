import {LinkData} from '../utils/LinkData.jsx'
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    console.log(LinkData[0].name);
  }, []);

  const handleCardClick=(url)=>{
    window.open(url,'_blank', 'noopener,noreferrer')
  }
  
  return (
    <div className="w-full px-4 mt-[30px] space-y-4">
      {LinkData.map(({ name, url, IconComponent, bgColor }) => {
        return (
          <div key={name}  
          onClick={()=>handleCardClick(url)}
          className={`w-full max-w-[400px] h-[55px] flex items-center justify-between px-[20px] rounded-[15px] font-medium text-[16px] transition-all duration-200 ease-linear hover:transform hover:scale-[1.05] hover:cursor-pointer mx-auto ${bgColor} text-white shadow-lg`}>
            <div className="flex items-center">
              <IconComponent className="text-[18px] mr-[12px] transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110" />
              <span>{name}</span>
            </div>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default Card;