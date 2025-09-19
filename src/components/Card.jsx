import { LinkData } from "../utils/LinkData.jsx";
import { useEffect } from "react";
const Card = () => {
  useEffect(() => {
    console.log(LinkData[0].name);
  }, []);
  return (
    <div>
      {LinkData.map(({ name, url, IconComponent }) => {
        return (
          <div key={name}  className="w-full max-w-[800px] h-[55px] flex items-center p-[15px] rounded mt-5 font-bold text-lg transition-all duration-200 ease-linear hover:shadow-[2px_8px_10px_rgba(0,0,0,0.4)] hover:cursor-pointer">

      

            <IconComponent />
                  <p className="ml-[10px]" >{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
