import React from 'react'
import Image from 'next/image';

interface BeneficiesItemComponentProps {
    mainImg: string;
    secondaryImg: string;
    mainText: string
    secondaryText: string;
    tertiaryText?: string;
    platform: string;
}

const BeneficiesItemComponent = (beneficiesProps: BeneficiesItemComponentProps) => {

    const getGradient = (platform: string) => {
        switch(platform) {
            case "HBO":
                return "bg-gradient-to-t from-[#3C034E] to-transparent"
            case "PARAMOUNT":
                return "bg-gradient-to-t from-[#0064FF] to-transparent"
            case "DISNEY":
                return "bg-gradient-to-t from-gray-900 to-transparent"
        }
    }

  return (
    <div className="rounded-md w-[384px] h-full">

        <div>
            <Image className='rounded-md z-0 absolute' width={384} height={250} src={beneficiesProps.mainImg} alt="" />
        </div>

        <div className={`${getGradient(beneficiesProps.platform)} mt-[138px]
        w-[384px] h-[112px] rounded-md absolute z-1
        `}>
            
            <div className="rounded-md flex flex-row items-center">
                <div className="m-4 ">
                    <Image width={80} height={80} src={beneficiesProps.secondaryImg} alt="" />
                </div>
                <div className="flex flex-col">
                    {
                        beneficiesProps.tertiaryText && (
                            <span className="font-roboto font-normal text-[11px] leading-4 text-white">{beneficiesProps.tertiaryText}</span>

                        )
                    }
                    <span className="font-roboto font-semibold text-[22px] leading-6 text-white">{beneficiesProps.mainText}</span>
                    <span className="font-roboto font-normal text-[18px] leading-5 text-white">{beneficiesProps.secondaryText}</span>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default BeneficiesItemComponent