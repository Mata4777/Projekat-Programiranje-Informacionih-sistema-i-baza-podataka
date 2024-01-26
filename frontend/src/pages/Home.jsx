import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselSlide from "../components/Carousel";
import NewsCard from "../components/NewCard";
import NavbarHome from "../components/navbars/NavbarHome";

const Home = () => {
  const news = [
    {
      id: "1",
      naslov: "Naslov br 1",
      tekst: "tekst br 1 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
    {
      id: "2",
      naslov: "Naslov br 2",
      tekst: "tekst br 2 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
    {
      id: "3",
      naslov: "Naslov br 3",
      tekst: "tekst br 4 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
    {
      id: "4",
      naslov: "Naslov br 4",
      tekst: "tekst br 4 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
    {
      id: "5",
      naslov: "Naslov br 5",
      tekst: "tekst br 4 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
    {
      id: "6",
      naslov: "Naslov br 6",
      tekst: "tekst br 4 nsdjasdjadsa dsa",
      imeAutora: "Nemanja",
      prezimeAutora: "Stefanovic",
      slika: "src/assets/proba.jpg",
    },
  ];
  const carouselItems = news.slice(0, 3);
  const cardItems = news.slice(3);

  return (
    <div>
      <NavbarHome />
      <CarouselSlide items={carouselItems} />
      <Row className="g-4 mt-5">
        {cardItems.map((vest) => (
          <Col key={vest.id} xs={12} md={6} lg={4}>
            <NewsCard {...vest} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
