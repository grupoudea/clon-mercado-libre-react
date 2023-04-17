import Image from 'next/image';

interface StoreItemProductComponentProps {
  idKey: number;
  img: string;
}

const StoreItemProductComponent = ({
  idKey,
  img,
}: StoreItemProductComponentProps) => (
  <div key={idKey}>
    <Image
      src={img}
      alt={''}
      width={70}
      height={70}
      className='h-[70px] w-[70px] rounded-[8px] border border-gray-e'
    />
  </div>
);

export default StoreItemProductComponent;
