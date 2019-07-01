import React from "react";
import Title from "../../components/Title";
import Chips from "../../components/Chips";
import Tags from "../../components/Tags";
import { Wrapper } from "./styled";
import { chips } from "../../data";
import { Link } from "react-router-dom";
const Menu = () => (
  <Wrapper>
    <Link to="/flip">
      <Title grey />
    </Link>
    <Chips chips={chips} />
    <Tags />
  </Wrapper>
);

export default Menu;
