import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import { useStoreSideBarDropDown } from "./StateStore";

const SideBarSubItem = ({ item }) => {
    const pathname = "/" + useLocation().pathname.split("/")[1];
    const { dropDownKeyList, add, remove } = useStoreSideBarDropDown();
    const [open, setOpen] = useState(dropDownKeyList.includes(item.dropDownKey));

    const handleSetOpen = () => {
        if(open) {
            remove(item.dropDownKey)
        } else {
            add(item.dropDownKey)
        }
        setOpen(!open);
    }
  return (
    <>
    <div className="w-full h-4 my-4 flex justify-between items-center" onClick={handleSetOpen}>
        <div className='w-full h-8 flex items-center gap-1 my-4 hover:opacity-40'>
            <div className='w-8 h-8  flex justify-center items-center text-white'>
                {item.icon}
            </div>
            <p className='text-white text-xs'>
                {item.title}
            </p>
            
        </div>
        <div className="text-gray-200 text-xs">
            {open ? <FaIcons.FaArrowDown /> : <FaIcons.FaArrowRight />}
        </div>
    </div>
    {
        (open && (
            item.subNav.map((subItem, index) => {
                return(
                    <NavLink to={subItem.path} key={index} >
                        <div className={`pl-4 w-full h-8 flex items-center gap-1 my-2 hover:opacity-60 rounded-md ${(pathname === subItem.path) ? "text-[#152259] bg-gray-200" : "text-white" } `}>
                            <div className="w-8 h-8  flex justify-center items-center text-xs">
                            {subItem.icon}
                            </div>
                            <p className="text-xs">{subItem.title}</p>
                        </div>
                    </NavLink>
                )
            })
        ))
    }
    </>
  );
};

export default SideBarSubItem;
