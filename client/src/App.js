import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
// import PostsForm from "./components/PostsForm";
// import PostsList from "./components/PostsList";
import api from "./api/axiosAPI";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import img from "./logo.svg";
import "./components/PostsForm.css";
import "./components/PostsList.css";
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const handleSubmit = (e) => {
      e.preventDefault();
      api.post("/posts", {
          title: e.target[0].value,
          text: e.target[1].value,
      }).then(res => setPosts(old => old.concat([res.data]))).catch(console.error);
  };

  // useEffect(() => {
  //   api.get("/posts").then(res => setPosts(res.data)).catch(console.error);
  // }, [posts]);

  return (
    <Container fluid>
      <Row>
        <Form className="posts-form" onSubmit={handleSubmit} key="form" posts={posts} setPosts={setPosts}>
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
      </Row>
      <Row>
        {posts.map((post, index) => (
          <Card style={{ width: '20rem'}} key={index}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default App;
