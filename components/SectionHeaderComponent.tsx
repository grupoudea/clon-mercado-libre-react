import {MdKeyboardArrowDown} from "react-icons/md";

interface SectionHeaderComponentProps {
    title: string;
    subtitle: string;
    isSubtitleList
}

const SectionHeaderComponent = ({title, subtitle, isSubtitleList}: SectionHeaderComponentProps) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <h2 className="text-2xl font-light text-gray-400 sm:mr-4">
                <span className="text-base sm:text-2xl font-light text-gray-400">{title} </span>
                {!isSubtitleList && (
                    <a className="text-xs sm:text-base ml-2 sm:ml-0 text-blue-500" href="#">{subtitle}</a>
                )}
                {isSubtitleList && (
                    <a className="text-xs sm:text-2xl font-semibold text-gray-500 ml-2 sm:ml-0" href="#">{subtitle}
                        <button className='icon-dark text-blue-dropdown'>
                            <MdKeyboardArrowDown/>
                        </button>
                    </a>
                )}
            </h2>
        </div>
    );
}

export default SectionHeaderComponent;