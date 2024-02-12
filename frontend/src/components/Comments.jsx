import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Comments = (props) => {
  const [newComment, setNewComment] = useState({ username: "", comment: "" });
  const [comments, setComments] = useState(props.comments);

  const handlePostComment = () => {
    if (newComment.username && newComment.comment) {
      const updatedComments = [
        ...comments,
        {
          ...newComment,
          id: comments.length + 1,
          datePosted: new Date().toISOString().slice(0, 10),
          likes: 0,
          dislikes: 0,
          isLiked: false,
          isDisliked: false, // New property to track whether the comment is disliked
        },
      ];
      setComments(updatedComments);
      setNewComment({ username: "", comment: "" });
    }
  };

  const handleLike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked,
          // Reset dislike when like is clicked
          dislikes: comment.isLiked
            ? comment.dislikes
            : comment.dislikes - (comment.isDisliked ? 1 : 0),
          isDisliked: false,
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  const handleDislike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          dislikes: comment.isDisliked
            ? comment.dislikes - 1
            : comment.dislikes + 1,
          isDisliked: !comment.isDisliked,
          // Reset like when dislike is clicked
          likes: comment.isDisliked
            ? comment.likes
            : comment.likes - (comment.isLiked ? 1 : 0),
          isLiked: false,
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };
  return (
    <div>
      <Form>
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
        {comments.map((comment) => (
          <Card
            key={comment.id}
            className="mb-2 rounded p-4 mt-2 mb-2 shadow-lg"
          >
            <Card.Header className="d-flex justify-content-between">
              <div>{comment.username}</div>
              <Button
                variant={comment.isLiked ? "success" : "outline-primary"}
                onClick={() => handleLike(comment.id)}
              >
                <FaThumbsUp className="me-1" />
                {comment.isLiked ? "Liked" : "Like"}
              </Button>
              <Button
                variant={comment.isDisliked ? "danger" : "outline-danger"}
                onClick={() => handleDislike(comment.id)}
              >
                <FaThumbsDown className="me-1" />
                {comment.isDisliked ? "Disliked" : "Dislike"}
              </Button>
            </Card.Header>
            <Card.Body className="d-flex justify-content-start shadow">
              {comment.comment}
            </Card.Body>
            <Card.Footer>
              <p>Number of likes: {comment.likes}</p>
              <p>Number of dislikes: {comment.dislikes}</p>
              <small className="d-flex justify-content-end font-italic">
                {comment.datePosted}
              </small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
