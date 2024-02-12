import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselSlide from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import NavbarHome from "../components/navbars/NavbarHome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // const news = [
  //   {
  //     id: "1",
  //     naslov: "Naslov br 1",
  //     tekst: "tekst br 1 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  //   {
  //     id: "2",
  //     naslov: "Naslov br 2",
  //     tekst: "tekst br 2 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  //   {
  //     id: "3",
  //     naslov: "Naslov br 3",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  //   {
  //     id: "4",
  //     naslov: "Naslov br 4",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  //   {
  //     id: "5",
  //     naslov: "Naslov br 5",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  //   {
  //     id: "6",
  //     naslov: "Naslov br 6",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //   },
  // ];
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get("http://localhost:8080/api/vest/todays");
    setNews(result.data);
  };
  console.log(news);

  const carouselItems = news.slice(0, 3);
  const cardItems = news.slice(3);

  return (
    <div>
      <NavbarHome />
      <CarouselSlide items={carouselItems} />
      <Row className="g-4 mt-5">
        {Array.isArray(cardItems) &&
          cardItems.map((vest) => (
            <Col key={vest.id} xs={12} md={6} lg={4}>
              <Link to={`/News/${vest.id}`}>
                <NewsCard {...vest} />
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;
