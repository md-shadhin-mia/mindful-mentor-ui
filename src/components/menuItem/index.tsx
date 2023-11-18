import React, { useState } from 'react';
import {useSpring, animated} from "@react-spring/web";
import useMeasure from 'react-use/esm/useMeasure';

type Props = {
    title: string,
    icon?: any,
    isAccordion?: boolean,
    children?: any
}
const MenuItem = ({ title, icon, isAccordion, children }:Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, { top ,bottom }] = useMeasure();

    const handleToggleAccordion = () => {
        setIsOpen(!isOpen);
        console.log("toggle",isOpen, bottom-top)

    };

    const springProps = useSpring({
        height: isOpen ? bottom-top : 0,
        opacity: isOpen ? 1 : 0,
        config: { tension: 170, friction: 26 },
    })

    return (
        <li id={`${title.toLowerCase()}-accordion`}>
            {isAccordion ? (
                <button
                    type="button"
                    className={` w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                    onClick={handleToggleAccordion}
                >
                    {icon}
                    <span>{title}</span>
                    {children && (
                        <svg
                            className={`ms-auto w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    )}
                </button>
            ) : (
                <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                >
                    {icon}
                    <span>{title}</span>
                </a>
            )}

            {isAccordion && (
                <animated.div
                    style={springProps}
                    id={`${title.toLowerCase()}-accordion`}
                    className={'overflow-hidden'}
                >
                    <div className={`w-full`}
                         ref={ref}
                    >
                        <ul className="pl-2 gap-x-3.5 py-2 pl-1.5 space-y-1.5">
                            {children}
                        </ul>
                    </div>
                </animated.div>
            )}
        </li>
    );
};

export default MenuItem;
