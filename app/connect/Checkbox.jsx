import React from "react";

const Checkbox = ({ checkboxName, handleCheckboxChange }) => {
  return (
    <label className="flex items-start sm:inline-flex sm:items-center">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500"
        value={checkboxName}
        onChange={handleCheckboxChange}
      />
      <span className="mx-2 font-extralight">{checkboxName}</span>
    </label>
  );
};

export default Checkbox;
