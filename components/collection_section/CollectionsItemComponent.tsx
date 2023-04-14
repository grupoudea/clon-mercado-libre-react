import Image from 'next/image';

interface CollectionsItemComponentProps {
    idKey: number;
    src: string;
}

const CollectionsItemComponent = ({idKey, src}: CollectionsItemComponentProps) => {    
    return (
        <div className="rounded-4 bg-white" key={idKey}>
            <Image src={src} alt={""} width={184} height={184} />
        </div>
    );
}

export default CollectionsItemComponent;