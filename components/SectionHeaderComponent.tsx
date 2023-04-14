import {MdKeyboardArrowDown} from "react-icons/md";

interface SectionHeaderComponentProps {
    title: string;
    subtitle: string;
    isSubtitleList: boolean
}

const SectionHeaderComponent = ({title, subtitle, isSubtitleList}: SectionHeaderComponentProps) => {
    return (
        <div className="flex flex-row pb-6 pl-1">
            <h2>
                <span className="text-2xl font-light text-gray-400">{title} </span>

                {!isSubtitleList && (
                    <a className="text-xs sm:text-base ml-2 sm:ml-0 text-blue-500" href="#">{subtitle}</a>
                )}
                {isSubtitleList && (
                    <a className="text-xs sm:text-2xl font-semibold text-gray-500 ml-2 sm:ml-0" href="#">{subtitle}
                        <button className='icon-dark text-blue-link'>
                            <MdKeyboardArrowDown/>
                        </button>
                    </a>
                )}
            </h2>
        </div>
    );
}

export default SectionHeaderComponent;