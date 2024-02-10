import { useUser } from "../components/UserHooks";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormCheck from "react-bootstrap/FormCheck";
import NavbarNovinar from "../components/navbars/NavBarNovinar";
import axios from "axios";

const CreateNewsPage = () => {
  const { userData } = useUser();
  const [newsData, setNewsData] = useState({
    title: "",
    coverPhoto: "",
    tag: "",
    text: "",
    category: "", // Use a single category instead of an array
  });
  console.log(userData);

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

  const handleCategorySelect = (category) => {
    setNewsData((prevData) => ({
      ...prevData,
      category,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submited");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/vest/new",
        newsData
      );

      console.log(response); // Check the response in the console

      console.log("News created successfully");
      // Optionally, you can navigate to a success page or perform other actions
    } catch (error) {
      console.error("Error during news creation:", error);
    }
  };
  console.log(newsData);

  const categoryOptions = ["Politics", "Technology", "Sports", "Entertainment"];

  return (
    <div>
      <NavbarNovinar />
      <div className="mt-5" style={{ width: "600px" }}>
        <h1 className="mb-5">Create new news</h1>
        <Form onSubmit={handleSubmit}>
          <Dropdown className="mb-2">
            <Dropdown.Toggle variant="secondary" id="categoriesDropdown">
              Select Category
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-3">
              {categoryOptions.map((category) => (
                <FormCheck
                  style={{ fontSize: "17px" }}
                  key={category}
                  type="radio" // Use radio buttons
                  label={category}
                  checked={newsData.category === category}
                  onChange={() => handleCategorySelect(category)}
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
          {/* Tag */}
          <Form.Group controlId="formTitle">
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tag"
              name="tag"
              value={newsData.tag}
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
          <Button className="mx-auto mt-5" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      {/* Submit Button */}
    </div>
  );
};

export default CreateNewsPage;
