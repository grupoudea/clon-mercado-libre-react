import React from 'react';
import Image from 'next/image';

interface BeneficiesItemComponentProps {
  key: any;
  mainImg: string;
  secondaryImg: string;
  mainText: string;
  secondaryText: string;
  tertiaryText?: string;
  platform: string;
}

const BeneficiesItemComponent = (
  beneficiesProps: BeneficiesItemComponentProps
) => {
  const getGradient = (platform: string) => {
    switch (platform) {
      case 'HBO':
        return 'bg-gradient-to-t from-[#3C034E] to-transparent';
      case 'PARAMOUNT':
        return 'bg-gradient-to-t from-[#0064FF] to-transparent';
      case 'DISNEY':
        return 'bg-gradient-to-t from-gray-900 to-transparent';
    }
  };

  return (
    <div
      className='h-[250px] w-[384px] rounded-md 
    max-sm:w-[320px]'
    >
      <div className='w-[384px]'>
        <Image
          className='absolute z-0 h-[250px] w-[384px] rounded-md max-sm:w-[320px]'
          width={384}
          height={250}
          src={beneficiesProps.mainImg}
          alt=''
        />
      </div>
      <div
        className={`${getGradient(
          beneficiesProps.platform
        )} z-1 absolute mt-[138px] h-[112px] 
        w-[384px] rounded-md
        max-sm:w-[320px]`}
      >
        <div className='flex flex-row items-center rounded-md'>
          <div className='m-4 '>
            <Image
              width={80}
              height={80}
              src={beneficiesProps.secondaryImg}
              alt=''
            />
          </div>
          <div className='flex flex-col'>
            {beneficiesProps.tertiaryText && (
              <span className='font-roboto text-[11px] font-normal leading-4 text-white'>
                {beneficiesProps.tertiaryText}
              </span>
            )}
            <span className='font-roboto text-[22px] font-semibold leading-6 text-white'>
              {beneficiesProps.mainText}
            </span>
            <span className='font-roboto text-[18px] font-normal leading-5 text-white'>
              {beneficiesProps.secondaryText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiesItemComponent;
