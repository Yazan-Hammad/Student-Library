import React, { useState, useEffect } from "react";
import "../css/LibraryPage.css";
import Courses from "../components/LibraryPage/Courses.js";
import Options from "../components/LibraryPage/Options.js";
import FormPage from "./FormPage";
import useBackend from "../hooks/use-backend";

function LibraryPage() {
  const [sortBy, setSortBy] = useState("name");
  const handleSort = (attribute) => {
    setSortBy(attribute);
  };

  const { token, notifyError } = useBackend();

  const [isOpen, setOpen] = useState(false);
  const handleForm = (setValue) => {

    if(!token) {
      notifyError('Please Login');
    } else {
      setOpen((open) => setValue);
    }
  };

  const [courses, setCourses] = useState([{}]);
  const onCreate = (course) => {
    courses.push(course);
    setCourses(courses);
  };

  return (
    <>
      <section className="library">
        <Options sortBy={sortBy} onSort={handleSort} handleForm={handleForm} />
        <div className="container">
          <Courses courses={courses} setCourses={setCourses} sortBy={sortBy} />
        </div>
        {isOpen && (
          <FormPage
            handleForm={handleForm}
            isOpen={isOpen}
            onCreate={onCreate}
          />
        )} 
      </section>
    </>
  );
}

export default LibraryPage;
