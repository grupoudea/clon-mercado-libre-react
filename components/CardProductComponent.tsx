interface CardProductComponentProps {
    showDescription: boolean;
    idKey: any;
    src: string;
    title?: string;
    subtitle?: string;
}

const CardProductComponent = ({showDescription, idKey, src, title, subtitle}: CardProductComponentProps) => {
    return (
        <div className="w-full rounded-lg shadow-md" key={`item_${idKey}`}>
            <img
                className="object-cover w-full h-48 rounded-lg"
                src={src}
                alt="image"
            />
            {showDescription && (
                <div className="p-2">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">{title}</h4>
                    <p className="mb-2 leading-normal">{subtitle} </p>
                </div>
            )}
        </div>
    );
}

export default CardProductComponent;