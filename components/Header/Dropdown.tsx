import Link from "next/link";
import { FunctionComponent } from "react";
import { movieRoutes } from "@/constants";

const Dropdown:FunctionComponent = () => {
  return (
    <div
      className="
        hidden 
        group-hover:flex
        rounded 
        hover:flex 
        easy-out
        hover:ease-in
        duration-150 
        absolute 
        min-w-[160px] 
        shadow 
        bg-white 
        flex-col
        py-2
        z-40
      "
    >
      {Array.from(movieRoutes.entries()).map(([key, { path, navLabel }]) => (
        <Link
          className="flex text-black font-normal leading-loose px-6 hover:bg-gray-100 rounded"
          href={path}
          key={key}
        >
          {navLabel}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
