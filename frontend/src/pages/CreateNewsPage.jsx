import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormCheck from "react-bootstrap/FormCheck";
import NavbarNovinar from "../components/navbars/NavBarNovinar";

const CreateNewsPage = () => {
  const [newsData, setNewsData] = useState({
    title: "",
    coverPhoto: "",
    text: "",
    categories: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuillChange = (value) => {
    setNewsData((prevData) => ({
      ...prevData,
      text: value,
    }));
  };

  const handleCategoryToggle = (category) => {
    const updatedCategories = newsData.categories.includes(category)
      ? newsData.categories.filter(
          (selectedCategory) => selectedCategory !== category
        )
      : [...newsData.categories, category];

    setNewsData((prevData) => ({
      ...prevData,
      categories: updatedCategories,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", newsData);
  };

  const categoryOptions = ["Politics", "Technology", "Sports", "Entertainment"];

  console.log(newsData);
  return (
    <div>
      <NavbarNovinar />
      <div className="mt-5" style={{ width: "600px" }}>
        <h1 className="mb-5">Create new news</h1>
        <Form onSubmit={handleSubmit}>
          <Dropdown className="mb-2">
            <Dropdown.Toggle variant="secondary" id="categoriesDropdown">
              Select Categories
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-3">
              {categoryOptions.map((category) => (
                <FormCheck
                  style={{ fontSize: "17px" }}
                  key={category}
                  type="checkbox"
                  label={category}
                  checked={newsData.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {/* Title */}
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={newsData.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Cover Photo */}
          <Form.Group controlId="formCoverPhoto">
            <Form.Label>Cover Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter cover photo URL"
              name="coverPhoto"
              value={newsData.coverPhoto}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Text (React-Quill Editor) */}
          <Form.Group controlId="formText">
            <Form.Label>Text</Form.Label>
            <ReactQuill
              className="mb-2"
              value={newsData.text}
              onChange={handleQuillChange}
              style={{ height: "300px" }}
            />
          </Form.Group>
        </Form>
      </div>

      {/* Submit Button */}
      <Button className="mx-auto mt-5" variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CreateNewsPage;
