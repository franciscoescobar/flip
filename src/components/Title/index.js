import React from "react";
import { Wrapper } from "./styled";
const Title = ({ fixed }) => (
  <Wrapper className={fixed ? "fixed" : ""}>
    <h1>Anchipurac bioclimático</h1>
    <p>Conoce las características bioclimáticas de nuestro edificio</p>
  </Wrapper>
);

export default Title;
