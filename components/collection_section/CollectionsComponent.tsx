import CollectionsItemComponent from "@components/collection_section/CollectionsItemComponent";
import Image from "next/image";
import SectionHeaderComponent from "@components/SectionHeaderComponent";

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
            img: "/media/collections/colecciones-item8.png",
        },
    ];
    return (
        <div className="mt-20">
            <SectionHeaderComponent title={"Colecciones:"} subtitle={"Supermercado"}
                                    isSubtitleList={true}></SectionHeaderComponent>
            <div className="justify-center mx-auto max-w-[1200px] flex flex-row">
                <div
                    className="bg-white shadow-md rounded-4 mr-4 h-fit 2xl:h-auto xl:h-auto lg:h-auto md:h-fit sm:h-fit hidden md:block">
                    <div>
                        <Image src={post.img} alt={""} width={383} height={383}/>
                    </div>
                    <div className="flex flex-col ml-10 mt-10">
                            <span
                                className="font-medium text-xs leading-3 flex items-center tracking-wider uppercase text-gray-600">descubre</span>
                        <span
                            className="font-medium text-lg leading-7 flex items-center uppercase text-gray-700">Supermercado</span>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 gap-x-4 gap-y-4 sm:mt-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
                    {posts.map((items, idKey) => (
                        <CollectionsItemComponent src={items.img} key={idKey} idKey={idKey}></CollectionsItemComponent>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionsComponent;