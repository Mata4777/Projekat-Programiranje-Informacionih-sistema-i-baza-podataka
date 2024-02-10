import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import NavbarNovinar from "../components/navbars/NavBarNovinar";
import { Row, Col } from "react-bootstrap";

const HomeNovinar = () => {
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
  return (
    <div>
      <NavbarNovinar />
      <Row className="g-4 mt-5">
        {news.map((vest) => (
          <Col key={vest.id} xs={12} md={6} lg={4}>
            <Link to={`/NewsNovinar/${vest.id}`}>
              <NewsCard {...vest} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeNovinar;
