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
        <img className="h-4 lg:h-5" src="/images/logo.svg" alt="The Movie Database (TMDB)" />
        <ul 
          className="
            flex-row 
            ml-8 
            gap-6 
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