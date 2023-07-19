import { FunctionComponent } from "react";
import Accordion from "../Accordion/Accordion";

const FilterNavbar: FunctionComponent = () => {

  return (
    <aside
      className="
        w-full
        col-span-2
      "
    >
      <Accordion accordionTitle="Sort"/>
      <Accordion accordionTitle="Where to watch"/>
      <Accordion accordionTitle="Filters" groupOpen/>
      <button className="w-full bg-gray-200 text-gray-500 font-semibold rounded-full py-3 mt-2">
        Search
      </button>
    </aside>
  );
};

export default FilterNavbar;
