import Image from 'next/image'
import React from 'react'
import SectionHeaderComponent from '../SectionHeaderComponent'
import DiscoverItemComponent from './DiscoverItemComponent';

const DiscoverComponent = () => {

    const items = [
        {
            mainText1: "hOGAR Y MUEBLES",
            mainText2: "HASTA 50% OFF",
            secondaryText: "RENUEVA TUS ESPACIO",
            textButton: "Ver más",
            img: "/media/main/descubre/img/muebles.png"
        },
        {
            mainText1: "por solo",
            mainText2: "$17.899 cada mes",
            secondaryText: "suscríbete al nivel 6",
            textButton: "Suscribirme",
            img: "/media/main/descubre/img/plataformas-y-mas.png"
        }
    ]

  return (
    <>
        <div className="max-h-[750px] h-full px-2 pt-9">

        <SectionHeaderComponent title={"Descubre"} subtitle={""}
                    isSubtitleList={false}></SectionHeaderComponent>

            <div className="flex flex-row gap-[15px] max-md:flex-wrap justify-center">

                {items.map((item, idKey)=>(
                    <DiscoverItemComponent key={idKey} mainText1={item.mainText1} 
                    mainText2={item.mainText2} secondaryText={item.secondaryText} textButton={item.textButton} img={item.img} />
                ))}

            </div>
        </div>
    </>
  )
}

export default DiscoverComponent