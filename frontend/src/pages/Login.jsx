import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const user = {
    id: 1,
    username: "nemanja@gmail.com",
    password: "nemanja123",
    role: "novinar",
  };

  const user2 = {
    id: 2,
    username: "mirko@gmail.com",
    password: "mirko123",
    role: "urednik",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const enteredUsername = e.target.elements.email.value;
    const enteredPassword = e.target.elements.password.value;

    if (
      (enteredUsername === user.username &&
        enteredPassword === user.password) ||
      (enteredUsername === user2.username && enteredPassword === user2.password)
    ) {
      const authenticatedUser =
        enteredUsername === user.username ? user : user2;

      if (authenticatedUser.role === "novinar") {
        navigate(`/Novinar/${authenticatedUser.id}`);
      } else if (authenticatedUser.role === "urednik") {
        navigate(`/Urednik/${authenticatedUser.id}`);
      } else {
        alert("Unknown user role");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <Container className="logInContainer">
        <h2 className="loginTitle">Log In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
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
