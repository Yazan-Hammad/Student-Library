import React from "react";
import { GoPlus } from "react-icons/go";
import "../../css/Options.css";

function Options({ sortBy, onSort, onCreate, handleForm	 }) {
  return (
    <div className="options container">
      <button onClick={() => handleForm(true)}>
        <GoPlus /> Add Course
      </button>
      <p>
        Sort Courses By:
        <button
          className={sortBy === "name" ? "active" : ""}
          onClick={() => onSort("name")}
        >
          Name
        </button>
        <button
          className={sortBy !== "name" ? "active" : ""}
          onClick={() => onSort("department")}
        >
          Department
        </button>
      </p>
    </div>
  );
}

export default Options;
