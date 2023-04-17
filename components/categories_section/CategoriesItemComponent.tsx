import Image from 'next/image';

interface CategoriesItemComponentProps {
  idKey: number;
  src: string;
  title: string;
  total: number;
}

const CategoriesItemComponent = ({
  idKey,
  src,
  title,
  total,
}: CategoriesItemComponentProps) => (
  <div
    className={`box-border border-b border-r bg-white ${
      total / 2 - 1 > Number(idKey) - 1 ? '' : 'lg:border-b-0'
    } ${
      total / 2 - 1 == Number(idKey) || total - 1 == Number(idKey)
        ? 'lg:border-r-0'
        : ''
    }  flex flex-col items-center justify-center border-gray-300 pb-10 pt-10`}
    key={idKey}
  >
    <Image src={src} alt={''} width={49} height={49} />
    <span className='text-xs font-normal text-gray-700 '>{title}</span>
  </div>
);

export default CategoriesItemComponent;
