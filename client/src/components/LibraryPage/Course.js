import React, { useEffect, useState } from "react";
import "../../css/Course.css";

function Course({ image, name, id, department, book, videos}) {
  const [opened, setOpened] = useState(false);
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHighlight(null);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [])
  

  const handleClick = (event) => {
    if (event.target.tagName !== "A") {
      setOpened((opened) => !opened);
    }
  };

  return (
    <div
      key={id}
      className={`course ${opened ? "active" : ""} ${highlight ? "hilight" : ""}`}
      onClick={handleClick}
    >
      <div className="course-inner">
        <div className="course-front">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <h2>{name}</h2>
          <p className="department">
            <span className="centerd">{department}</span>
          </p>
          <p>🆔 {id}</p>
        </div>
        <div className="course-back">
          <h2>{name}</h2>
          <div className="content">
            {book && (
              <a href={book} target="_blank" rel="noreferrer">
                📖 Book
              </a>
            )}
            {videos && (
              <a href={videos} target="_blank" rel="noreferrer">
                🎥 Videos
              </a>
            )}
            {Boolean(book) || Boolean(videos) || <p>There are no resources</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
