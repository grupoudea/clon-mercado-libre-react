import {Container} from "@mui/material";
import SectionHeaderComponent from "@/components/SectionHeaderComponent";
import CategoriesItemComponent from "@/components/categories_section/CategoriesItemComponent";

const CategoriesComponent = () => {
    const posts = [
        {
            img: "/media/main/categorias-populares/categorias-item1.png",
            info: "Carros, Motos y Otros"
        },
        {
            img: "/media/main/categorias-populares/categorias-item2.png",
            info: "Computación"
        },
        {
            img: "/media/main/categorias-populares/categorias-item3.png",
            info: "Ropa y Accesorios"
        },
        {
            img: "/media/main/categorias-populares/categorias-item4.png",
            info: "Hogar y Muebles"
        },
        {
            img: "/media/main/categorias-populares/categorias-item5.png",
            info: "Accesorios para Vehículos"
        },
        {
            img: "/media/main/categorias-populares/categorias-item6.png",
            info: "Electrodomésticos"
        },
        {
            img: "/media/main/categorias-populares/categorias-item7.png",
            info: "Cámaras y Accesorios"
        },
        {
            img: "/media/main/categorias-populares/categorias-item8.png",
            info: "Celulares y Teléfonos"
        },
        {
            img: "/media/main/categorias-populares/categorias-item9.png",
            info: "Belleza y Cuidado Personal"
        },
        {
            img: "/media/main/categorias-populares/categorias-item10.png",
            info: "Deportes y Fitness"
        },
        {
            img: "/media/main/categorias-populares/categorias-item11.png",
            info: "Electrónica, Audio y Video"
        },
        {
            img: "/media/main/categorias-populares/categorias-item12.png",
            info: "Consolas y Videojuegos"
        },
        {
            img: "/media/main/categorias-populares/categorias-item13.png",
            info: "Juegos y Juguetes"
        },
        {
            img: "/media/main/categorias-populares/categorias-item14.png",
            info: "Herramientas"
        },
    ];
    return (
        <>
            <div className="mt-20">
                <SectionHeaderComponent title={"Categorías populares"} subtitle={""} isSubtitleList={false}></SectionHeaderComponent>
                <div className="justify-center mx-auto max-w-[1190px] w-full grid grid-cols-7 mb-10 bg-opacity-0.002 shadow-sm rounded-4">
                    {posts.map((item, key) => (
                        <CategoriesItemComponent key={key} idKey={key} src={item.img} title={item.info}></CategoriesItemComponent>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoriesComponent;