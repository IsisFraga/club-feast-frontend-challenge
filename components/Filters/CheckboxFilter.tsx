"use client";
import { FunctionComponent, useState } from "react";
import { checkboxItems } from "../Accordion/Accordion";

export interface ICheckboxFilter {
  filter: (typeof checkboxItems)[0];
  handleToggleActiveCheckbox: () => void;
}

const CheckboxFilter: FunctionComponent<ICheckboxFilter> = ({
  handleToggleActiveCheckbox,
  filter: { label, title, checked },
}) => {
  return (
    <div className="flex flex-col py-3 px-4 border-t border-gray-200">
      <h3 className="mb-3 text-base">{title}</h3>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id={label}
          defaultChecked={true}
          onChange={handleToggleActiveCheckbox}
          className="accent-light-blue w-4 h-4 border border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor={label} className="ml-2">
          {label} {checked ? "s" : "n"}
        </label>
      </div>
    </div>
  );
};

export default CheckboxFilter;
