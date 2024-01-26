import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const NewsCard = ({ naslov, tekst, slika }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={slika} alt={`Image for ${naslov}`} />
      <Card.Body>
        <Card.Title>{naslov}</Card.Title>
        <Card.Text>{tekst}</Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
    </Card>
  );
};
NewsCard.propTypes = {
  naslov: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
  slika: PropTypes.string.isRequired,
};

export default NewsCard;
