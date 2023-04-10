import {MdKeyboardArrowDown} from "react-icons/md";
import CardProductComponent from "@components/CardProductComponent";

const Collections = () => {
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
        <div>
            <div className="flex flex-row gap-2">
                <h1 className="text-md text-current text-2xl">Colecciones:</h1>
                <h2 className="text-md text-current text-2xl">Supermercado:</h2>
                <button className='icon-dark'>
                    <MdKeyboardArrowDown/>
                </button>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
                <div className="row-span-2">
                    <CardProductComponent showDescription={true} src={post.img} title={post.title} subtitle={post.content} idKey={"principal"}></CardProductComponent>
                </div>
                {posts.map((items, key) => (
                    <div className="row-span-1">
                        <CardProductComponent showDescription={false} idKey={key} src={items.img}></CardProductComponent>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collections;