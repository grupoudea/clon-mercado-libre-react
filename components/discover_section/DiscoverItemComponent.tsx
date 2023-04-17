import React from "react";
import Image from 'next/image'

interface DiscoverItemComponentProps {
  mainText1: string;
  mainText2: string;
  secondaryText: string;
  textButton: string;
  img: string;

}

const DiscoverItemComponent = (discover: DiscoverItemComponentProps) => {
  const mainTextStyle = "font-roboto font-semibold text-[28px] leading-8 flex items-center text-uppercase text-[#4B4B4B] md:text-[14px]"

  return (
    <div className="w-[584px] h-[250px] bg-white shadow-md rounded flex flex-row justify-between
     max-xl:h-[220px]
     max-xs:h-[150px]">
      <div className="flex flex-col items-start pl-8">
        <div className="pt-[57.7px] flex flex-col
        ">
          <span className="font-roboto font-semibold text-[12px] 
          leading-3 flex items-center tracking-[4px] text-uppercase 
          text-[#4B4B4B]
          max-xs:text-[10px]">{discover.secondaryText}</span>
          <div className="mt-[11px]
          max-xs:mt-1">
            <span className={`${mainTextStyle} max-sm:text-[12px]`}>{discover.mainText1}</span>
            <span className={`${mainTextStyle} max-sm:text-[12px]`}>{discover.mainText2}</span>
          </div>
        </div>

        <div className="mt-[13.8px] w-24 h-9 bg-[#3483FA] rounded-sm flex flex-col justify-center
        max-xs:hidden">
          <span className="font-roboto font-semibold text-sm text-center text-white">{discover.textButton}</span>
        </div>
      </div>
      <Image className="h-[250px] rounded max-xl:w-[200px] max-xl:h-[220px]
      max-xs:w-[150px] max-xs:h-[150px]"
        width={289.84}
        height={250}
        src={discover.img}
        alt=""
      />
    </div>
  );
};

export default DiscoverItemComponent;
