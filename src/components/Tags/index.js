import React from "react";
import { Wrapper, Ball } from "./styled";
const Tags = () => (
  <Wrapper>
    <p>Arquitectura bioclimática</p>
    <Ball />
    <p>Energías</p>
    <Ball className="green" />
  </Wrapper>
);

export default Tags;
