import api from "../api/axiosAPI";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./PostsForm.css";

const PostsForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    api.get("/profile/username").then(res => {
      api.post("/posts", {
        title: e.target[0].value,
        text: e.target[1].value,
        author: res.data
      }).then(res => props.setPosts(old => old.concat([res.data]))).catch(console.error)
    }).catch(console.error);
  };

  return (
    <Form className="posts-form" onSubmit={handleSubmit}>
      <Link to="/profile">View Profile</Link>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter post title" />
      </Form.Group>

      <Form.Group controlId="formText">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter post content" />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};


export default PostsForm;