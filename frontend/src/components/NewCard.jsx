import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <Link to={`News/${props.id}`}>
      <Card className="p-2" style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={props.slika}
          alt={`Image for ${props.naslov}`}
        />
        <Card.Body>
          <Card.Title>{props.naslov}</Card.Title>
          <Card.Text>{props.tekst}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
  naslov: PropTypes.string.isRequired,
  tekst: PropTypes.string.isRequired,
  slika: PropTypes.string.isRequired,
};

export default NewsCard;
