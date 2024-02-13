import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const ReadNewsCard = (props) => {
  const [likeCount, setLikeCount] = useState(props.brojLajkova);
  const [isLiked, setIsLiked] = useState(false);

  const [dislikeCount, setDislikeCount] = useState(props.brojDisajkova);
  const [isDisliked, setIsDisliked] = useState(false);
  console.log("PROPS " + JSON.stringify(props));

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    localStorage.setItem("likeCount", likeCount.toString());
  }, [likeCount]);

  const handleDislikeClick = () => {
    if (!isDisliked) {
      setDislikeCount(dislikeCount + 1);

      // If the like button is currently active, reset it
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
    }
    setIsDisliked(!isDisliked);
  };

  // useEffect(() => {
  //   localStorage.setItem("likeCount", likeCount.toString());
  // }, [likeCount]);

  // useEffect(() => {
  //   localStorage.setItem("dislikeCount", dislikeCount.toString());
  // }, [dislikeCount]);

  return (
    <div>
      <Card className="mx-auto mt-5" style={{ width: "1200px" }}>
        <Row className="shadow rounded p-2">
          <Col className="d-flex justify-content-start ">{props.tag}</Col>
          <Col className="d-flex justify-content-end ">{props.rubrika}</Col>
        </Row>

        <Card.Body className="mt-2">
          <Card.Title className="text-center">{props.naslov}</Card.Title>

          <Card.Text
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></Card.Text>

          {/* Like Button with ThumbsUp icon */}
          <Button
            variant={isLiked ? "success" : "outline-success"}
            onClick={handleLikeClick}
          >
            <FaThumbsUp /> ({likeCount})
          </Button>

          {/* Dislike Button with ThumbsDown icon */}
          <Button
            variant={isDisliked ? "danger" : "outline-danger"}
            onClick={handleDislikeClick}
          >
            <FaThumbsDown /> ({dislikeCount})
          </Button>
        </Card.Body>
        <Row>
          <Col>Author: {props.novinar}</Col>
          <Col>{props.date}</Col>
        </Row>
      </Card>
    </div>
  );
};

ReadNewsCard.propTypes = {
  brojLajkova: PropTypes.number.isRequired,
  brojDisajkova: PropTypes.number.isRequired,
  naslov: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  rubrika: PropTypes.string.isRequired,
  novinar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReadNewsCard;
