import {HiX} from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes";

const Sidebar = (props: {
    open: boolean;
    onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
    const {open, onClose} = props;
    return (
        <>
        <div
            style={{scrollbarWidth:"thin", scrollbarColor:"gray"}}
            className={`sm:none duration-175 linear fixed !z-50 flex min-h-full max-h-screen overflow-y-auto flex-col bg-white shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-slate-700
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
      ${
                open ? "translate-x-0" : "-translate-x-96"
            }`}
        >
      <span
          className="fixed top-4 right-4 cursor-pointer xl:hidden"
          onClick={onClose}>
        <HiX/>
      </span>

            <div className={`mx-[56px] mt-[60px] flex items-center`}>
                <div
                    className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                    Mindful
                </div>
            </div>
            <div className="mt-8  h-px bg-gray-300 dark:bg-white/30"/>

            {/* Nav item */}

            <ul className="mb-auto pt-1">
                <Links routes={routes}/>
            </ul>
        </div>
            <div onClick={onClose} className={`h-screen w-screen fixed bg-gray-600 bg-opacity-60 !z-40 ${open ? "block" : "hidden"} xl:hidden`}></div>
        </>
    );
};

export default Sidebar;
