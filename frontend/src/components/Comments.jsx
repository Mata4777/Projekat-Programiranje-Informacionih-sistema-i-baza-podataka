import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const Comments = (props) => {
  const [newComment, setNewComment] = useState({ username: "", comment: "" });
  const [comments, setComments] = useState(props.komentari ?? []);

  const handlePostComment = async () => {
    if (newComment.username && newComment.comment) {
      const newCommentData = {
        vestId: props.id,
        username: newComment.username,
        text: newComment.comment,
        brojLajkova: 0,
        brojDislajkova: 0,
      };

      try {
        // Send a POST request to your backend with the new comment data
        const response = await axios.post(
          "http://localhost:8080/api/komentar/new",
          newCommentData
        );

        // Handle the response if needed (e.g., log success message)
        console.log("Comment posted successfully:", response.data);

        // Update the local comments state with the new comment
        setComments([...comments, response.data]);

        // Reset the new comment form fields
        setNewComment({ username: "", comment: "" });
      } catch (error) {
        // Handle error if the POST request fails (e.g., log error message)
        console.error("Error posting comment:", error);
      }
    }
  };

  const handleLike = async (commentId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/komentar/like?id=${commentId}`
      );

      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                isLiked: !comment.isLiked,
                isDisliked: false,
                brojLajkova: comment.brojLajkova + (comment.isLiked ? -1 : 1),
                brojDislajkova: comment.isDisliked
                  ? comment.brojDislajkova - 1
                  : comment.brojDislajkova,
              }
            : comment
        )
      );
      console.log(response);
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  const handleDislike = async (commentId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/komentar/dislike?id=${commentId}`
      );

      if (response.data === "Success") {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId
              ? {
                  ...comment,
                  isDisliked: !comment.isDisliked,
                  brojDislajkova:
                    comment.brojDislajkova + (comment.isDisliked ? -1 : 1),
                  isLiked: false,
                  brojLajkova: comment.isLiked
                    ? comment.brojLajkova - 1
                    : comment.brojLajkova,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.error("Error disliking comment:", error);
    }
  };

  return (
    <div>
      <Form>
        <h5 className="mt-5 mb-4">Comments section</h5>
        {/* Username Input */}
        <Form.Group className="mb-2" controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Your Username"
            value={newComment.username}
            onChange={(e) =>
              setNewComment({ ...newComment, username: e.target.value })
            }
          />
        </Form.Group>

        {/* Comment Input */}
        <Form.Group className="mb-2" controlId="formComment">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your Comment"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
        </Form.Group>

        {/* Post Comment Button */}
        <Button variant="primary" onClick={handlePostComment}>
          Post Comment
        </Button>
      </Form>

      {/* Previous Comments */}
      <div className="mt-3">
        <h5>Previous Comments:</h5>
        {comments.length === 0 ? (
          <p>No comments.</p>
        ) : (
          comments.map((comment) => (
            <Card
              key={comment.id}
              className="mx-4 mt-4 rounded p-4 mt-2 mb-2 shadow-lg"
            >
              <Row className="border">
                <Card.Header className="d-flex justify-content-between">
                  <Col className="d-flex justify-content-start">
                    <div>{comment.username}</div>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button
                      variant={comment.isLiked ? "success" : "outline-success"}
                      onClick={() => handleLike(comment.id)}
                    >
                      <FaThumbsUp className="me-1" />
                      {comment.isLiked ? "Liked " : "Like "}(
                      {comment.brojLajkova})
                    </Button>
                    <Button
                      variant={comment.isDisliked ? "danger" : "outline-danger"}
                      onClick={() => handleDislike(comment.id)}
                    >
                      <FaThumbsDown className="me-1" />
                      {comment.isDisliked ? "Disliked " : "Dislike "} (
                      {comment.brojDislajkova})
                    </Button>
                  </Col>
                </Card.Header>
              </Row>
              <Card.Body className="d-flex justify-content-start border shadow">
                {comment.text}
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

Comments.propTypes = {
  komentari: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Comments;
