// Archive.js
import { useState } from "react";
import NavbarArchiveSearch from "../components/navbars/NavbarArchiveSearch";
import { Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Archive = () => {
  // const initialNews = [
  //   {
  //     id: "1",
  //     naslov: "Naslov br 1",
  //     tekst: "tekst br 1 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "2024-01-01",
  //   },
  //   {
  //     id: "2",
  //     naslov: "Naslov br 2",
  //     tekst: "tekst br 2 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "2024-02-09",
  //   },
  //   {
  //     id: "3",
  //     naslov: "Naslov br 3",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "2024-02-01",
  //   },
  //   {
  //     id: "4",
  //     naslov: "Naslov br 4",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "01-Feb-2024",
  //   },
  //   {
  //     id: "5",
  //     naslov: "Naslov br 5",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "2024-02-09",
  //   },
  //   {
  //     id: "6",
  //     naslov: "Naslov br 6",
  //     tekst: "tekst br 4 nsdjasdjadsa dsa",
  //     imeAutora: "Nemanja",
  //     prezimeAutora: "Stefanovic",
  //     slika: "src/assets/proba.jpg",
  //     date: "2024-02-09",
  //   },
  // ];
  const [allNews, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get("http://localhost:8080/api/vest/all");
    setNews(result.data);
  };

  const [filteredNews, setFilteredNews] = useState(allNews);

  const handleFilterChange = (filteredNewsData) => {
    setFilteredNews(filteredNewsData);
  };

  return (
    <div>
      <NavbarArchiveSearch
        news={allNews}
        setFilteredNews={handleFilterChange}
      />
      <Row className="g-4 mt-5">
        {filteredNews.map((vest) => (
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

export default Archive;
