import {MdKeyboardArrowDown} from "react-icons/md";

interface SectionHeaderComponentProps {
    title: string;
    subtitle: string;
    isSubtitleList
}

const SectionHeaderComponent = ({title, subtitle, isSubtitleList}: SectionHeaderComponentProps) => {
    return (
        <div className="flex flex-row">
            <h2>
                <span className="text-2xl font-light text-gray-400">{title} </span>
                {!isSubtitleList && (
                    <a className="text-base mb-1 text-blue-500" href="#">{subtitle}</a>
                )}
                {isSubtitleList && (
                    <a className="text-2xl font-semibold text-gray-500" href="#">{subtitle}
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