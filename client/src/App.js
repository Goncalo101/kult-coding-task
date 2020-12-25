import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import PostsForm from "./components/PostsForm";
import PostsList from "./components/PostsList";
import { useState } from "react";

import './App.css';

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [ fetchRequired, setFetchRequired ] = useState(true);

  return (
    <Container fluid>
      <Row>
        <PostsForm setPosts={setPosts} />
      </Row>
      <Row>
        <PostsList posts={posts} setPosts={setPosts} fetchRequired={fetchRequired} setFetchRequired={setFetchRequired}/>
      </Row>
    </Container>
  );
}

export default App;
