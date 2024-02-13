import EditButtons from "../components/EditButtons";
import NavbarNovinar from "../components/navbars/NavBarNovinar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReadNewsCard from "../components/ReadNewsCard";

const NewsNovinar = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  useEffect(() => {
    const loadNews = async () => {
      try {
        console.log("ID " + id);
        const result = await axios.get(
          `http://localhost:8080/api/vest/one/${id}`
        );
        setNews(result.data);
      } catch (error) {
        console.error("Error loading news:", error);
      }
    };

    loadNews();
  }, [id]);

  console.log("NEWS u NEWSPAGE " + JSON.stringify(news));
  return (
    <div>
      <NavbarNovinar />

      {news ? (
        <>
          <ReadNewsCard {...news} />
          <EditButtons />
          {/* <Comments comments={news.Comments} /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsNovinar;
