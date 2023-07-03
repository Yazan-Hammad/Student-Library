import React, { useState, useEffect } from "react";
import Course from "./Course.js";

const map = new Map([
  ["CS", 1],
  ["SW", 2],
  ["CIS", 3],
  ["BIT", 4],
]);

const sortFunction = (a, b, sortBy) => {
  if (sortBy === "name") return a.name.localeCompare(b.name);
  return map.get(a.department) - map.get(b.department);
};

function Courses({ courses, setCourses, sortBy }) {
  useEffect(() => {
    fetch("/api/v1/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data.data.courses));
  }, []);

  courses.sort((a, b) => sortFunction(a, b, sortBy));

  const elements = courses.map(
    ({ name, id, department, image, book, videos }) => {
      return (
        <Course
          key={id}
          id={id}
          name={name}
          department={department}
          image={image}
          book={book}
          videos={videos}
        />
      );
    }
  );

  return <>{elements}</>;
}

export default Courses;
