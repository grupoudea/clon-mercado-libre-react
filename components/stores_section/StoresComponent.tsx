import SectionHeaderComponent from "@/components/SectionHeaderComponent";
import StoreItemComponent from "@components/stores_section/StoreItemComponent";

const StoreComponent = () => {
    const posts = [
        {
            headerImg: "/media/main/mejores-tiendas/img/tiendas-header1.png",
            logo: "/media/main/mejores-tiendas/img/tiendas-logo1.png",
            title: "Lego",
            items: [
                "/media/main/mejores-tiendas/img/tiendas-item-1-1.png",
                "/media/main/mejores-tiendas/img/tiendas-item-1-2.png",
                "/media/main/mejores-tiendas/img/tiendas-item-1-3.png"
            ]
        },
        {
            headerImg: "/media/main/mejores-tiendas/img/tiendas-header2.png",
            logo: "/media/main/mejores-tiendas/img/tiendas-logo2.png",
            title: "Xiaomi",
            items: [
                "/media/main/mejores-tiendas/img/tiendas-item-2-1.png",
                "/media/main/mejores-tiendas/img/tiendas-item-2-2.png",
                "/media/main/mejores-tiendas/img/tiendas-item-2-3.png"
            ]
        },
        {
            headerImg: "/media/main/mejores-tiendas/img/tiendas-header3.png",
            logo: "/media/main/mejores-tiendas/img/tiendas-logo3.png",
            title: "Oster",
            items: [
                "/media/main/mejores-tiendas/img/tiendas-item-3-1.png",
                "/media/main/mejores-tiendas/img/tiendas-item-3-2.png",
                "/media/main/mejores-tiendas/img/tiendas-item-3-3.png"
            ]
        },
        {
            headerImg: "/media/main/mejores-tiendas/img/tiendas-header4.png",
            logo: "/media/main/mejores-tiendas/img/tiendas-logo4.png",
            title: "Nikon",
            items: [
                "/media/main/mejores-tiendas/img/tiendas-item-4-1.png",
                "/media/main/mejores-tiendas/img/tiendas-item-4-2.png",
                "/media/main/mejores-tiendas/img/tiendas-item-4-3.png"
            ]
        },
    ];
    return (
        <div className="mt-20">
            <SectionHeaderComponent title={"Las mejores tiendas te esperan"} subtitle={"Ver tiendas"}
                                    isSubtitleList={false}></SectionHeaderComponent>
            <div
                className="grid grid-cols-1 px-2 xl:grid-cols-4 px-0 lg:grid-cols-3 md:grid-cols-2 gap-[16px] justify-center mx-auto  max-w-[1200px]">
                {posts.map((item, idKey) => (
                    <StoreItemComponent idKey={idKey} headerImg={item.headerImg} logo={item.logo} title={item.title}
                                        items={item.items} key={idKey}></StoreItemComponent>
                ))}
            </div>
        </div>
    )
}

export default StoreComponent;