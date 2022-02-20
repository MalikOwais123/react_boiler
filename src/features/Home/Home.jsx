import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
    <Container>
      <h2>Welcome to Home Page</h2>
      <Link to={"/about"}>
        <Button>GO TO ABOUT</Button>
      </Link>
    </Container>
  );
};

export default Home;
