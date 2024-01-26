import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavbarUrednik = () => {
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">News</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="ms-auto d-flex me-3">
              <Button variant="outline-success">Archive</Button>
            </div>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                style={{ width: "400px", fontSize: "1.2rem" }}
              />
              <DropdownButton id="dropdown-basic-button" title="Urednik">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarUrednik;
