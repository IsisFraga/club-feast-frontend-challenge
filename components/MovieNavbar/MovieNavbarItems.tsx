import { MenuItemOption } from "@/constants/movieNavbar";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import { FunctionComponent } from "react";

export interface IMovieNavbarSubitems {
  movieNavbaritems: MenuItemOption[];
}

const MovieNavbarItems: FunctionComponent<IMovieNavbarSubitems> = ({
  movieNavbaritems,
}) => {
  return (
    <ul
      className="
        hidden
        group-active:flex
        group-hover:flex
        rounded 
        easy-out
        active:ease-in
        group-hover:ease-in
        duration-150 
        absolute
        min-w-[180px] 
        shadow 
        bg-white 
        flex-col
        py-2
        top-8
        z-40
      "
    >
      {movieNavbaritems.map((movieNavbaritem) => (
        <li
          className="group/subitems relative flex text-black font-normal leading-loose px-6 hover:bg-gray-100 rounded items-center justify-between"
          key={movieNavbaritem.label}
        >
          {movieNavbaritem.label}
          {movieNavbaritem.number && (
            <span className="text-gray-400 text-sm">
              {movieNavbaritem.number}
            </span>
          )}
          {movieNavbaritem.subitems && (
            <>
              <span className="-rotate-90">
                <ArrowDownIcon />
              </span>
              <ul
                className="
                  hidden
                  group-activ/subitemse:flex
                  group-hover/subitems:flex
                  rounded 
                  easy-out
                  active:ease-in
                  group-hover/subitems:ease-in
                  duration-150 
                  absolute
                  min-w-[180px] 
                  shadow 
                  bg-white 
                  flex-col
                  py-2
                  top-1
                  left-[180px] 
                "
              >
                {movieNavbaritem.subitems.map((movieNavbarSubitem) => (
                  <li
                    className="flex text-black font-normal leading-loose px-6 hover:bg-gray-100 rounded items-center justify-between"
                    key={movieNavbarSubitem.label}
                  >
                    {movieNavbarSubitem.label}
                    {movieNavbarSubitem.number && (
                      <span className="text-gray-400 text-sm">
                        {movieNavbarSubitem.number}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieNavbarItems;
