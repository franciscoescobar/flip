import React from "react";
import Title from "../../components/Title";
import Chips from "../../components/Chips";
import Tags from "../../components/Tags";
import { Wrapper } from "./styled";
const Menu = () => (
  <Wrapper>
    <Title />
    <Chips chips={["a", "b", "c", "d", "e", "f"]} />
    <Tags />
  </Wrapper>
);

export default Menu;
