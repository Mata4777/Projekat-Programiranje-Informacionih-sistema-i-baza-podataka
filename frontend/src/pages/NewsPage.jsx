import NavbarHome from "../components/navbars/NavbarHome";
import Comments from "../components/Comments";
import ReadNewsCard from "../components/ReadNewsCard";
//import { useParams } from "react-router-dom";

const NewsPage = () => {
  //const { id } = useParams();
  // Dummy data for previous comments
  const dummyComments = [
    {
      id: 1,
      username: "User1",
      comment: "Great news!",
      datePosted: "2022-01-01",
      likes: 11,
      dislikes: 111,
    },
    {
      id: 2,
      username: "User2",
      comment: "Interesting article.",
      datePosted: "2022-01-02",
      likes: 22,
      dislikes: 222,
    },
    {
      id: 3,
      username: "User3",
      comment: "Looking forward to more updates.",
      datePosted: "2022-01-03",
      likes: 33,
      dislikes: 333,
    },
  ];

  return (
    <div>
      <NavbarHome className="mb-4" />
      <ReadNewsCard />
      <Comments comments={dummyComments} />
    </div>
  );
};

export default NewsPage;
