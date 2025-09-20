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
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {LinkData.map(({ name, url, IconComponent }) => {
        return (
          <div key={name}  
          onClick={()=>handleCardClick(url)}
          className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-[50px] sm:h-[55px] md:h-[60px] flex items-center p-[0px] sm:p-[15px] rounded mt-3 sm:mt-5 font-bold text-sm sm:text-lg md:text-xl transition-all duration-200 ease-linear hover:shadow-[2px_8px_10px_rgba(0,0,0,0.4)] hover:cursor-pointer mx-auto bg-gray-100 hover:bg-gray-200">
            <IconComponent className="text-lg sm:text-xl md:text-2xl transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110" />
            <p className="ml-[8px] sm:ml-[10px] md:ml-[12px]" >{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;