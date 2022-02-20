import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import logo from "./../../assets/images/logo/react_boiler.jpeg";

// Style
import "./_Home.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";

const Home = () => {
  return (
    <Container>
      <div className="show_logo center">
        <img src={logo} alt="" />
        <Header variant="h1" fontWeight="semi-bold">
          👋🏻 Welcome
        </Header>
        <Paragraph>This is a boilerplate for React applications.</Paragraph>
        <Paragraph>
          You can use it as a starting point for your own React applications 😎.
        </Paragraph>
        <Paragraph>
          It has a lot of useful features, like: SASS (SCSS), React Router,
          React Redux, React Hooks,
        </Paragraph>
        <Paragraph>
          Check out the{" "}
          <Link to={"/about"}>
            <Button hover={true}>ABOUT 🤡</Button>
          </Link>{" "}
          page.
        </Paragraph>
      </div>
    </Container>
  );
};

export default Home;
