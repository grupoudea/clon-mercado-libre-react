import {Container} from "@mui/material";
import CollectionsItemComponent from "@components/collection_section/CollectionsItemComponent";
import Image from "next/image";

const CollectionsComponent = () => {
    const post = {
        title: "Descubre",
        img: "/media/collections/colecciones-principal.png",
        content: "Supermercado"
    }
    const posts = [
        {
            img: "/media/collections/colecciones-item1.png"
        },
        {
            img: "/media/collections/colecciones-item2.png"
        },
        {
            img: "/media/collections/colecciones-item3.png"
        },
        {
            img: "/media/collections/colecciones-item4.png"
        },
        {
            img: "/media/collections/colecciones-item5.png"
        },
        {
            img: "/media/collections/colecciones-item6.png"
        },
        {
            img: "/media/collections/colecciones-item7.png"
        },
        {
            img: "/media/collections/colecciones-item3.png",
        },
    ];
    return (
        <Container>
            <div className="mt-20">
                <div className="flex flex-row">
                    <h2 className="text-26 font-light text-gray-600">Colecciones:</h2>
                    <a className="text-blue-500 inline-block no-underline font-medium text-26 leading-26 text-gray-600"
                       href="#">Supermercado
                        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_398)">
                                <path d="M13.7149 8.75L7.44338 15.0065L1.17188 8.75" stroke="#3483FA"
                                      stroke-width="1.5"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_398">
                                    <rect width="14" height="24" fill="white" transform="translate(0.671875)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>

                <div className={"mx-auto max-w-1184 flex mt-1 flex-row gap-4"}>
                    <div className="bg-white shadow-md rounded-4">
                        <div>
                            <Image src={post.img} alt={""} width={383} height={383} />
                        </div>
                        <div className="flex flex-col ml-10 mt-10">
                            <span
                                className="font-medium text-xs leading-3 flex items-center tracking-wider uppercase text-gray-600">descubre</span>
                            <span
                                className="font-medium text-lg leading-7 flex items-center uppercase text-gray-700">Supermercado</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-1 gap-y-1">
                        {posts.map((items, key) => (
                            <CollectionsItemComponent key={key} src={items.img}></CollectionsItemComponent>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CollectionsComponent;