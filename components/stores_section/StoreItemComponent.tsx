/* eslint-disable react/no-array-index-key */
import StoreItemProductComponent from '@components/stores_section/StoreItemProductComponent';
import Image from 'next/image';

interface StoreItemComponentProps {
  idKey: number;
  headerImg: string;
  logo: string;
  title: string;
  items: string[];
}

const StoreItemComponent = ({
  idKey,
  headerImg,
  logo,
  title,
  items,
}: StoreItemComponentProps) => (
  <div
    className='ml-auto mr-auto h-[340px] w-[284px] rounded-md bg-white shadow-sm'
    key={idKey}
  >
    <div>
      <Image
        src={headerImg}
        alt={''}
        width={284}
        height={95}
        className='absolute z-0 h-[95px] w-[284px] rounded-tl-[4px] rounded-tr-[4px] bg-white'
      />
    </div>
    <div className='flex h-[80px] w-[284px] flex-row justify-center pt-[55px]'>
      <div className='z-[1] h-[80px] w-[80px] rounded-[8px] bg-white shadow-md'>
        <Image src={logo} alt={''} width={80} height={81} />
      </div>
    </div>
    <div className='mt-[60px] flex flex-col items-center gap-[20px]'>
      <span className='text-[24px] font-semibold leading-7 text-gray-3'>
        {title}
      </span>
      <div className='flex flex-row justify-center gap-[7px]'>
        {items.map((item, idKey) => (
          <StoreItemProductComponent
            idKey={idKey}
            img={item}
            key={idKey}
          ></StoreItemProductComponent>
        ))}
      </div>
      <div>
        <span className='text-[15px] font-semibold leading-4 text-gray-9'>
          Ver tienda
        </span>
      </div>
    </div>
  </div>
);

export default StoreItemComponent;
