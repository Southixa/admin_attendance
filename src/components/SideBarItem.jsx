import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBarItem = ({ item }) => {
  const pathname = "/" + useLocation().pathname.split("/")[1];
  return (
    <NavLink to={item.path}>
      <div className={`w-full h-8 flex items-center gap-1 my-2 hover:opacity-60 rounded-md ${(pathname === item.path) ? "text-[#152259] bg-gray-200" : "text-white" }`}>
        <div className="w-8 h-8  flex justify-center items-center">
          {item.icon}
        </div>
        <p className="text-xs">{item.title}</p>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
