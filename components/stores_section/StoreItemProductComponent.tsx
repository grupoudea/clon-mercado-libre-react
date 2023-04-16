import Image from "next/image";

interface StoreItemProductComponentProps {
    idKey: any;
    img: string;
}

const StoreItemProductComponent = ({idKey, img}: StoreItemProductComponentProps) => {
    return (
        <div key={idKey}>
            <Image src={img} alt={""} width={70} height={70}
                   className="w-[70px] h-[70px] border border-gray-e rounded-[8px]"/>
        </div>
    )
}

export default StoreItemProductComponent;