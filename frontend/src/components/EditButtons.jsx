import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditButtons = () => {
  return (
    <div className="my-3">
      {/* Add margin-top */}
      <Row>
        <Col>
          <Button
            as={Link}
            to={`/:id/NewsNovinar/Edit/:id`}
            className="me-2"
            variant="primary"
          >
            Edit
          </Button>
          {/* Add margin-right */}
          <Button className="me-2" variant="success">
            Send to Urednik
          </Button>{" "}
          {/* Add margin-right */}
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </div>
  );
};

export default EditButtons;
