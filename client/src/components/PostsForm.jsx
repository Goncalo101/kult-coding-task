import api from "../api/axiosAPI";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./PostsForm.css";

const PostsForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/posts", {
      title: e.target[0].value,
      text: e.target[1].value,
    }).then(res => props.setPosts(old => old.concat([res.data]))).catch(console.error);
  };

  return (
    <Form className="posts-form" onSubmit={handleSubmit}>
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