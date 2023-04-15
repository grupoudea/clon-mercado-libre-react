import Image from "next/image";

interface CategoriesItemComponentProps {
    idKey: any;
    src: string;
    title: string;
    total:number
}

const CategoriesItemComponent = ({idKey, src, title,total}: CategoriesItemComponentProps) => {
    return (
        
        <div
            className={`box-border bg-white ${(total/2)-1> Number(idKey)-1 ? "border-b"  :  "" } ${(total/2)-1== Number(idKey) || (total)-1== Number(idKey) ? ""  :  "border-r" }  border-gray-300 flex flex-col justify-center items-center pt-10 pb-10`}
            key={idKey}>
            <Image src={src} alt={""} width={49} height={49} />
            <span className="font-normal text-xs text-gray-700 ">{title} {idKey}</span>
        </div>
    )
}

export default CategoriesItemComponent;