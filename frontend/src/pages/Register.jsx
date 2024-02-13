import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Dropdown, FormCheck } from "react-bootstrap";
import NavbarGlavniUrednik from "../components/navbars/NavbarGlavniUrednik";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: false,
    rubrike: [],
  });
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "role") {
      setFormData((prevData) => ({
        ...prevData,
        role: checked, // set to true or false
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the role based on the switch
    const role = formData.role ? "ROLE_UREDNIK" : "ROLE_NOVINAR";

    // Combine the form data with the selected categories
    const userData = {
      ...formData,
      role,
      rubrike: selectedCategories,
    };
    console.log(JSON.stringify(userData));

    try {
      // Send a POST request to your backend with the user data
      const response = await axios.post(
        "http://localhost:8080/api/user/new",
        userData
      );
      setFormData({
        username: "",
        password: "",
        role: false,
        rubrike: [],
      });

      // Optionally, you can handle the response here (e.g., redirect to a different page)
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

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
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Da li je urednik?"
              style={{ fontSize: "1.5rem", color: "red" }}
              onChange={(e) =>
                handleInputChange({
                  target: { name: "role", checked: e.target.checked },
                })
              }
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
