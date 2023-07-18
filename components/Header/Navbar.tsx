import Image from 'next/image'
import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <nav className="w-full">
      <div 
        className="
          m-auto
          flex
          flex-row
          items-center
          justify-start
        "
      >
        <Image width={154} height={20} src="/images/logo.svg" alt="The Movie Database (TMDB)" />
        <ul 
          className="
            flex-row 
            ml-6 
            gap-5 
            hidden 
            lg:flex
          "
        >
          <NavbarItem label="Movies" dropdown/>
          <NavbarItem label="TV Shows" />
          <NavbarItem label="People" />
          <NavbarItem label="More" />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar