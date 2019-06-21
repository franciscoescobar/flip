import React from "react";

import ButtonStart from "../../components/ButtonStart";
import Title from "../../components/Title";
import { Wrapper, Container } from "./styled";
import { Link } from "react-router-dom";
const Home = () => (
  <Container>
    <Title fixed />
    <Wrapper>
      <Link to="/menu">
        <ButtonStart>Comenzar</ButtonStart>
      </Link>
    </Wrapper>
  </Container>
);

export default Home;
