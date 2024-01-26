import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

const CarouselSlide = ({ items }) => {
  const carouselHeight = "500px"; // Set the desired height for the Carousel
  const carouselWidth = "950px";

  return (
    <Carousel
      style={{ height: carouselHeight, width: carouselWidth }}
      className="mx-auto d-block mt-5"
    >
      {items.map((item) => (
        <Carousel.Item key={item.id}>
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
