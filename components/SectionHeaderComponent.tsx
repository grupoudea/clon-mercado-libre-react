import { MdKeyboardArrowDown } from 'react-icons/md';

interface SectionHeaderComponentProps {
  title: string;
  subtitle: string;
  isSubtitleList: boolean;
}

const SectionHeaderComponent = ({
  title,
  subtitle,
  isSubtitleList,
}: SectionHeaderComponentProps) => (
  <div className='flex flex-row pb-6 pl-1'>
    <h2>
      <span className='text-2xl font-light text-gray-400'>{title} </span>

      {!isSubtitleList && (
        <a className='ml-2 text-xs text-blue-500 sm:ml-0 sm:text-base' href='#'>
          {subtitle}
        </a>
      )}
      {isSubtitleList && (
        <a
          className='ml-2 text-xs font-semibold text-gray-500 sm:ml-0 sm:text-2xl'
          href='#'
        >
          {subtitle}
          <button className='icon-dark text-blue-link'>
            <MdKeyboardArrowDown />
          </button>
        </a>
      )}
    </h2>
  </div>
);

export default SectionHeaderComponent;
