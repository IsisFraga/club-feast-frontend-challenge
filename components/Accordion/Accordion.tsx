"use client";
import { FunctionComponent, useState } from "react";
import CheckboxFilter from "../Filters/CheckboxFilter";
import ShowMeFilter from "../Filters/ShowMeFilter";

export interface IAccordion {
  accordionTitle: string;
  groupOpen?: boolean;
}
export const checkboxItems = [
  {
    title: "Availabilities",
    label: "Search all availabilities?",
    checked: true,
  },
  {
    title: "Release Dates",
    label: "Search all releases?",
    checked: true,
  },
];

const Accordion:FunctionComponent<IAccordion> = ({ accordionTitle, groupOpen }) => {
  const [activeCheckbox, setActiveCheckbox] = useState(checkboxItems);

  const handleToggleActiveCheckbox = (
    index: number,
    checked: boolean
  ) => {
    setActiveCheckbox(
      activeCheckbox.map((checkbox, currentIndex) =>
      currentIndex === index
      ? { ...checkbox, checked: !checked }
      : checkbox
      
      )
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white mb-3">
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto">
        <div
          className="              
            flex
            w-full
            align-center
            justify-between
            shadow-md
            border
            border-gray-200
            rounded-lg
          "
        >
          <details
            className="
              w-full
              flex
              align-center
              justify-between
              group
            "
            open={groupOpen && true}
          >
            <summary
              className="          
                flex
                align-center
                justify-between
                text-lg
                font-semibold
                cursor-pointer
                px-4
              "
            >
              <span className="py-3">{accordionTitle}</span>
              <span className="transition group-open:rotate-180 py-3">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="text-neutral-600 w-full pt-1 group-open:animate-fadeIn">
              <ShowMeFilter />
              {checkboxItems.map((filter, index) => (
                <>
                  <CheckboxFilter
                    key={filter.title}
                    filter={filter}
                    handleToggleActiveCheckbox={() =>
                      handleToggleActiveCheckbox(index)
                    }
                  />
                </>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
