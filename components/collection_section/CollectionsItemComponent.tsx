import Image from 'next/image';

interface CollectionsItemComponentProps {
    key: any;
    src: string;
}

const CollectionsItemComponent = ({key, src}: CollectionsItemComponentProps) => {
    return (
        <div className="rounded-4 bg-white" key={key}>
            <Image src={src} alt={""} width={184} height={184} />
        </div>
    );
}

export default CollectionsItemComponent;