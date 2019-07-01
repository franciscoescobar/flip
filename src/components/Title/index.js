import React from "react";
import { Wrapper } from "./styled";
const Title = ({ fixed, grey }) => (
  <Wrapper className={fixed ? "fixed" : ""}>
    <h1 className={grey ? "grey" : ""}>Anchipurac bioclimático</h1>
    <p className={grey ? "grey" : ""}>
      Conoce las características bioclimáticas de nuestro edificio
    </p>
  </Wrapper>
);

export default Title;
