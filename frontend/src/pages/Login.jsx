// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useUser } from "../components/UserHooks";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    const enteredUsername = e.target.elements.username.value;
    const enteredPassword = e.target.elements.password.value;

    try {
      const formData = new FormData();
      formData.append("username", enteredUsername);
      formData.append("password", enteredPassword);
      console.log(formData);

      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Set user data in the context

        if (userData.role === "ROLE_NOVINAR") {
          navigate(`/Novinar/${userData.userId}`);
        } else if (userData.role === "ROLE_UREDNIK") {
          navigate(`/Urednik/${userData.userId}`);
        } else if (userData.role === "ROLE_GUREDNIK") {
          navigate(`/GUrednik/${userData.userId}`);
        } else {
          setError("Unknown user role");
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login");
    }
  };

  return (
    <div>
      <Container className="logInContainer">
        <h2 className="loginTitle">Log In</h2>
        {error && <div className="error">{error}</div>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
