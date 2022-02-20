import React from "react";
import "./_About.scss";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
const About = () => {
  return (
    <Container>
      <Header>About Page</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nibh eget nisl sollicitudin, euismod aliquam nunc tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nullam euismod, nunc eget aliquet consectetur,
        nisl nisi commodo nunc, eget tincidunt nisl nunc eget nisl.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nibh eget nisl sollicitudin, euismod aliquam nunc tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nullam euismod, nunc eget aliquet consectetur,
        nisl nisi commodo nunc, eget tincidunt nisl nunc eget nisl.
      </Paragraph>
    </Container>
  );
};
export default About;
