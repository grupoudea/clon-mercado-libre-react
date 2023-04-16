import React from 'react'
import BeneficiesItemComponent from './BeneficiesItemComponent'
import SectionHeaderComponent from '../SectionHeaderComponent'

const BeneficiesComponent = () => {
    const beneficies =  [
        {
            mainImg: "/media/main/beneficios/img/disney-star.png",
            secondaryImg: "/media/main/beneficios/img/comboplus-square.jpg.png",
            mainText: "Sin cargo con nivel 6",
            secondaryText: "Disney+ y Star+",
            platform: "DISNEY"
        },
        {
            mainImg: "/media/main/beneficios/img/hbo.png",
            secondaryImg: "/media/main/beneficios/img/hbologoSquare.png",
            mainText: "Hasta 50% OFF",
            secondaryText: "HBO Max",
            tertiaryText: "7 DÍAS GRATIS",
            platform: "HBO"
        },
        {
            mainImg: "/media/main/beneficios/img/paramount.png",
            secondaryImg: "/media/main/beneficios/img/paramount-logo.png",
            mainText: "Hasta 50% OFF",
            secondaryText: "Paramount+",
            tertiaryText: "7 DÍAS GRATIS",
            platform: "PARAMOUNT"
        }

    ]

  return (
    <div className="mt-10 w-full">
        <SectionHeaderComponent title={"Beneficios de Mercado Puntos"} subtitle={"Ver todos los beneficios"}
                                        isSubtitleList={false}></SectionHeaderComponent>
        <div className="debug-green m-auto flex flex-row justify-center gap-4 h-[270px] 
        max-md:flex-col max-md:h-full max-md:items-center
        max-xl:flex-wrap max-xl:h-full md:items-center">

            {
                beneficies.map((item, idKey)=> (
                    <BeneficiesItemComponent key={idKey} mainImg={item.mainImg} secondaryImg={item.secondaryImg}
                    mainText={item.mainText} secondaryText={item.secondaryText} tertiaryText={item.tertiaryText} platform={item.platform}></BeneficiesItemComponent>
                ))
            }

        </div>
    </div>
  )
}

export default BeneficiesComponent