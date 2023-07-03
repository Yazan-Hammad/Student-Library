import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/Form.css";
import FormContent from "../components/LibraryPage/FormPage/FormContent";
import useBackend from "../hooks/use-backend";

function Form({ handleForm, onCreate }) {
  const { token, makeRequest } = useBackend();

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    id: "",
    department: "",
    image: "",
    book: "",
    videos: "",
  });

  const submit = async function (e) {
    e.preventDefault();

    makeRequest(
      "post",
      "http://127.0.0.1:5000/api/v1/courses",
      "Course Successfully Created",
      { ...formData },
      { Authorization: `Bearer ${token}` },
      () => {
        onCreate(formData);
        handleForm(false);
      }
    );
  };

  return ReactDOM.createPortal(
    <FormContent
      handleForm={handleForm}
      formData={formData}
      submit={submit}
      setFormData={setFormData}
    />,
    document.querySelector(".modal-container")
  );
}

export default Form;
