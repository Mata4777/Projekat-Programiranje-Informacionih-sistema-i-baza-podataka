import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
const Comments = (props) => {
  // State to manage the new comment
  const [newComment, setNewComment] = useState({ username: "", comment: "" });

  // State to manage the list of comments
  const [comments, setComments] = useState(props.comments);

  // Handle posting a new comment
  const handlePostComment = () => {
    // Validate that both username and comment are provided
    if (newComment.username && newComment.comment) {
      // Add the new comment to the list
      const updatedComments = [
        ...comments,
        {
          ...newComment,
          id: comments.length + 1,
          datePosted: new Date().toISOString().slice(0, 10),
        },
      ];
      setComments(updatedComments);

      setNewComment({ username: "", comment: "" });
    }
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
            <Card.Header className="d-flex justify-content-start">
              {comment.username}
            </Card.Header>
            <Card.Body className="d-flex justify-content-start shadow">
              {comment.comment}
            </Card.Body>
            <small className=" card-footer d-flex justify-content-end font-italic">
              {comment.datePosted}
            </small>
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
