import UtilitiesMenu from "./UtilitiesMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="
        w-full 
        max-h-16 
        z-40 
        bg-dark-blue
        px-4
        md:px-16
        py-3
      "
    >
      <div className="
          max-w-[1300px]
          flex
          flex-row
          items-center
          justify-center
          m-auto
          px-9
        "
      >
        <Navbar />
        <UtilitiesMenu />
      </div>
    </header>
  );
};

export default Header;
