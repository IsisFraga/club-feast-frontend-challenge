import { movieRoutes } from "@/constants";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const FilterNavbar = () => {
  return (
    <aside
      className="
        w-full
        col-span-2
      "
    >
      <div className="
          rounded-lg
          py-3
          px-4
          flex
          align-center
          justify-between
          shadow-md
          border
          border-gray-200
          mb-3
          text-lg
          font-semibold
          cursor-pointer			
        "
      >
        Sort
        <ChevronRightIcon className="w-4"/>
      </div>
      <div className="
          rounded-lg
          py-3
          px-4
          flex
          align-center
          justify-between
          shadow-md
          border
          border-gray-200
          mb-3
          text-lg
          font-semibold
          cursor-pointer			
        "
      >
        Where to watch
        <ChevronRightIcon className="w-4"/>
      </div>
      <div className="
          rounded-lg
          py-3
          px-4
          flex
          align-center
          justify-between
          shadow-md
          border
          border-gray-200
          mb-3
          text-lg
          font-semibold
          cursor-pointer			
        "
      >
        Filters
        <ChevronRightIcon className="w-4"/>
      </div>
      <button className="w-full bg-gray-200 text-gray-500 font-semibold rounded-full py-3 mt-2">
        Search
      </button>
    </aside>
  );
};

export default FilterNavbar;
