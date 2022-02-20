import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <Link to={"/about"}>
        <Button>About</Button>
      </Link>
    </div>
  );
};

export default Home;
