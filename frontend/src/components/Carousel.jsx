import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarouselSlide = ({ items }) => {
  const carouselHeight = "500px"; // Set the desired height for the Carousel
  const carouselWidth = "1000px";

  // Render nothing if there are no items
  if (items.length === 0) {
    return null;
  }

  return (
    <Carousel
      style={{ height: carouselHeight, width: carouselWidth }}
      className="mx-auto d-block mt-5"
    >
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <Link to={`/News/${item.id}`}>
            <Image
              src={item.slika}
              alt={`Image for ${item.naslov}`}
              fluid
              style={{ height: carouselHeight, width: carouselWidth }}
            />
            <Carousel.Caption>
              <h3>{item.naslov}</h3>
              <p>{item.tekst}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CarouselSlide.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      naslov: PropTypes.string.isRequired,
      tekst: PropTypes.string.isRequired,
      slika: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselSlide;
