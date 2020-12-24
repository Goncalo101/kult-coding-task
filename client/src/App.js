import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './App.css';
import PostsForm from "./components/PostsForm";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <PostsForm />
      </Row>
      <Row>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default App;
