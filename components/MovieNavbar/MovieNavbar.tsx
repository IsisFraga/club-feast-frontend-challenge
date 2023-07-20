import { FunctionComponent } from "react";
import { movieMenuItems } from "@/constants/movieNavbar";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import MovieNavbarItems from "./MovieNavbarItems";


const MovieNavbar: FunctionComponent = () => {
  return (
    <ul className='max-w-[1400px] m-auto flex flex-row w-full items-center justify-center h-[46px]'>
      {movieMenuItems.map((movieMenuItem) => (
        <li key={movieMenuItem.id} className='group relative flex flex-row leading-9 border-b-4 border-transparent active:border-dark-blue first:border-light-blue [&:not(:last-child)]:mr-7 items-center cursor-pointer font-normal text-base pt-1'>
          <span className="group [&:not(:last-child)]:mr-2">
            {movieMenuItem.title}
          </span>
            <ArrowDownIcon />
            <MovieNavbarItems movieNavbaritems={movieMenuItem.items}/>
        </li>
      ))}
    </ul>
  );
};

export default MovieNavbar;
