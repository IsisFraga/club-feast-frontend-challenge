import { FunctionComponent } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import NavbarItem from "./NavbarItem";

const UtilitiesMenu: FunctionComponent = () => {
  return (
    <div className="
        w-full 
        flex 
        flex-row 
        ml-auto 
        gap-7 
        items-center 
        justify-end
      "
    >
      <ul
        className="
            flex-row 
            ml-8 
            gap-6 
            hidden 
            lg:flex
            items-center
          "
      >
        <li className="cursor-pointer">
          <PlusIcon className="w-6 text-white" />
        </li>
        <NavbarItem label="EN" 
          className="
            w-7 
            h-[26px] 
            border 
            rounded 
            flex
            justify-center 
            items-center 
            m-auto 
            hover:bg-white 
            hover:text-dark-blue
            easy-out
            hover:ease-in
            duration-150
          " 
        />
        <NavbarItem label="Login" />
        <NavbarItem label="Join TMDB" />
        <li className="cursor-pointer">
          <MagnifyingGlassIcon className="w-6 text-sky-400" />
        </li>

      </ul>
    </div>
  );
};

export default UtilitiesMenu;
