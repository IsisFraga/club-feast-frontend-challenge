interface NavbarItemProps {
  label: string;
  className?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, className }) => {
  return (
    <li className={`text-white cursor-pointer font-sans font-semibold text-base p-2 ${className}`}>
      {label}
    </li>
  )
}

export default NavbarItem;