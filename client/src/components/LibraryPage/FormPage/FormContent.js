import React from "react";

function FormContent({
  handleForm,
  formData,
  submit,
  setFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === "image" || name === "book" || name === "videos"
          ? value
          : // ? prevFormData[name]
            value,
    }));
  };
  const handlePaste = function (event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: pastedText,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further processing with the formData
    handleForm(false); // Close the overlay after form submission
  };
  return (
    <>
      <div className="overlay" onClick={() => handleForm(false)}></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Course Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
          <label>Department:</label>
          <select
            className="my-dropdown"
            type="text"
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
          >
            <option value="" disabled defaultValue>
              Select a value
            </option>
            <option value="CS">CS</option>
            <option value="SW">SW</option>
            <option value="CIS">CIS</option>
            <option value="BIT">BIT</option>
          </select>
          <label>{"Image: [paste the link]"}</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            onPaste={handlePaste}
          />
          <label>
            <label>{"Book: [paste the link]"}</label>
          </label>
          <input
            type="text"
            name="book"
            value={formData.book}
            onChange={handleChange}
          />
          <label>
            <label>{"Videos: [paste the link]"}</label>
          </label>
          <input
            type="text"
            name="videos"
            value={formData.videos}
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={(e) => {
              submit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContent;
