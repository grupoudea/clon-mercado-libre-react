/* eslint-disable react/no-array-index-key */
import CollectionsItemComponent from '@components/collection_section/CollectionsItemComponent';
import Image from 'next/image';
import SectionHeaderComponent from '@components/SectionHeaderComponent';

const CollectionsComponent = () => {
  const post = {
    title: 'Descubre',
    img: '/media/collections/colecciones-principal.png',
    content: 'Supermercado',
  };
  const posts = [
    {
      img: '/media/collections/colecciones-item1.png',
    },
    {
      img: '/media/collections/colecciones-item2.png',
    },
    {
      img: '/media/collections/colecciones-item3.png',
    },
    {
      img: '/media/collections/colecciones-item4.png',
    },
    {
      img: '/media/collections/colecciones-item5.png',
    },
    {
      img: '/media/collections/colecciones-item6.png',
    },
    {
      img: '/media/collections/colecciones-item7.png',
    },
    {
      img: '/media/collections/colecciones-item8.png',
    },
  ];
  return (
    <div className='mt-20'>
      <SectionHeaderComponent
        title={'Colecciones:'}
        subtitle={'Supermercado'}
        isSubtitleList={true}
      ></SectionHeaderComponent>
      <div className='mx-auto flex max-w-[1200px] flex-row justify-center'>
        <div className='rounded-4 2xl:h-auto mr-4 hidden h-fit bg-white shadow-sm sm:h-fit md:block md:h-fit lg:h-auto xl:h-auto'>
          <div>
            <Image src={post.img} alt={''} width={383} height={383} />
          </div>
          <div className='ml-10 mt-10 flex flex-col'>
            <span className='flex items-center text-xs font-medium uppercase leading-3 tracking-wider text-gray-600'>
              descubre
            </span>
            <span className='flex items-center text-lg font-medium uppercase leading-7 text-gray-700'>
              Supermercado
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:mt-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          {posts.map((items, idKey) => (
            <CollectionsItemComponent
              src={items.img}
              key={idKey}
              idKey={idKey}
            ></CollectionsItemComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsComponent;
