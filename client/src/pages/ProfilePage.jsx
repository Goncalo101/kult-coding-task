import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosAPI";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import '../components/PostsForm.css';
import './MainPage.css';

const ProfilePage = () => {
  const [fetchRequired, setFetchRequired] = useState(true);
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('username', e.target[0].value);
    formData.append('profilePicture', e.target[1].files[0]);

    api.post("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
    }}).then().catch(console.error);
  };

  useEffect(() => {
    if (fetchRequired) {
      api.get('/profile/username').then(res => setUserName(res.data)).catch(console.error);
      setFetchRequired(false);
    }
  }, [fetchRequired]);

  return (
    <Container fluid>
      <Row>
        <Form className="posts-form" onSubmit={handleSubmit}>
          <Link to="/">View Posts</Link>
          <Form.Group controlId="formTitle">
            <Form.Label>Your new name</Form.Label>
            <Form.Control type="text" placeholder={userName} />
          </Form.Group>

          <Form.Group controlId="formText">
            <Form.Label>Your new profile picture</Form.Label>
            <Form.File name="profilePicture" />
          </Form.Group>

          <Button variant="primary" type="submit">Change</Button>
        </Form>
      </Row>
    </Container>
  );
}

export default ProfilePage;
