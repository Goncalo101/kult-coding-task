import { useEffect } from "react";
import api from "../api/axiosAPI";
import Card from "react-bootstrap/Card";
import img from "../assets/logo.svg";

import "./PostsList.css";

const PostsList = (props) => {
  useEffect(() => {
    if (props.fetchRequired) {
      api.get("/posts").then(res => props.setPosts(res.data)).catch(console.error);
      props.setFetchRequired(false);
    }
  }, [props]);

  return (
    props.posts.map((post, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
          </Card.Body>
        </Card>
      ))
  );
};


export default PostsList;