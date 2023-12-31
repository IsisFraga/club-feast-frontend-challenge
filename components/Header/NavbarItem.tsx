import { FunctionComponent } from "react";
import Dropdown from "./Dropdown";

interface NavbarItemProps {
  label: string;
  className?: string;
  dropdown?: boolean;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, className, dropdown }) => {

  return (
    <li className={`group md:w-fit text-white cursor-pointer font-sans font-semibold text-base p-2 ${className}`}>
      {label}
      {dropdown && <Dropdown />}
    </li>
  )
}

export default NavbarItem;