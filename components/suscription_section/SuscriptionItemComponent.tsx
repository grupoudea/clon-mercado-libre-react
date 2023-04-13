import React from 'react'
import Image from 'next/image';

interface SuscriptionItemComponentProps {
    src: string;
    text: string
}

const SuscriptionItemComponent = (suscriptionItemProps: SuscriptionItemComponentProps) => {
  return (
    <div className="flex flex-row items-center">
        <div className="mr-[17px]">
            <Image width={72} height={72} src={suscriptionItemProps.src} alt="" />

        </div>
        <div className="w-60 h-12 font-roboto font-normal text-[16px] leading-4 flex items-center text-black">
            <span>{suscriptionItemProps.text}</span>
        </div>

    </div>

  )
}

export default SuscriptionItemComponent