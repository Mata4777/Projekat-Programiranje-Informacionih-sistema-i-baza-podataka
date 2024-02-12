import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Dropdown, FormCheck } from "react-bootstrap";
import NavbarGlavniUrednik from "../components/navbars/NavbarGlavniUrednik";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    username: "",
    password: "",
    isUrednik: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation logic here if needed

    // Log the form data
    console.log("Submitted data:", formData);
  };
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        )
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };
  const categoryOptions = ["Politics", "Technology", "Sports", "Entertainment"];

  return (
    <div>
      <NavbarGlavniUrednik />
      <Container className="p-4 rounded shadow mt-5" style={{ width: "500px" }}>
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="surname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your surname"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose a username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mx-auto m-3" controlId="isUrednik">
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Da li je urednik?"
              style={{ fontSize: "1.5rem", color: "red" }}
            />
          </Form.Group>
          <Form.Group className="mx-auto m-3">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="categoriesDropdown">
                Select Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categoryOptions.map((category) => (
                  <FormCheck
                    key={category}
                    type="checkbox"
                    label={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Button className="mx-auto mt-3" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
