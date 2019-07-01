import React from "react";

import ButtonStart from "../../components/ButtonStart";
import Title from "../../components/Title";
import { Wrapper, Container } from "./styled";
import { Link } from "react-router-dom";
import background from "../../assets/images/00.jpg";
const Home = () => {
  const handleStart = event => {
    document.body.requestFullscreen();
  };
  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <Title fixed={true} />
      <Wrapper>
        <Link onClick={handleStart} to="/menu">
          <ButtonStart>Comenzar</ButtonStart>
        </Link>
      </Wrapper>
    </Container>
  );
};
export default Home;
