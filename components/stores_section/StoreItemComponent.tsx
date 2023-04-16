import StoreItemProductComponent from "@components/stores_section/StoreItemProductComponent";
import Image from "next/image";

interface StoreItemComponentProps {
    idKey: any;
    headerImg: string;
    logo: string;
    title: string;
    items: string[]
}

const StoreItemComponent = ({idKey, headerImg, logo, title, items}: StoreItemComponentProps) => {
    return (
        <div className="w-[284px] h-[340px] bg-white shadow-sm rounded-md" key={idKey}>
            <div>
                <Image src={headerImg} alt={""} width={284} height={95}
                       className="bg-white absolute z-0 w-[284px] h-[95px] rounded-tl-[4px] rounded-tr-[4px]"/>
            </div>
            <div className="pt-[55px] h-[80px] w-[284px] flex flex-row justify-center">
                <div className="z-[1] w-[80px] h-[80px] bg-white shadow-md rounded-[8px]">
                    <Image src={logo} alt={""} width={80} height={81}/>
                </div>
            </div>
            <div className="mt-[60px] flex flex-col items-center gap-[20px]">
                <span className="font-semibold text-[24px] leading-7 text-gray-3">{title}</span>
                <div className="flex flex-row justify-center gap-[7px]">
                    {items.map((item, idKey) => (
                        <StoreItemProductComponent idKey={idKey} img={item} key={idKey}></StoreItemProductComponent>
                    ))}
                </div>
                <div>
                    <span className="font-semibold text-[15px] leading-4 text-gray-9">Ver tienda</span>
                </div>
            </div>
        </div>
    )
}

export default StoreItemComponent;