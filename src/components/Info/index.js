import React from "react";
import styled from "styled-components";
const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #6497b1;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
  > * {
    margin-left: 3rem;
    margin-right: 1rem;
  }
  hr {
    border: 1px solid #cbcbcb;
    width: 80%;
  }
`;
const Info = () => (
  <Wrapper>
    <SubTitle>Arquitectura bioclimática</SubTitle>
    <hr />
    <Title>Orientacion</Title>
    <hr />
    <p className="first-body">
      La orientación de un edificio determina su posisicón respecto al recorrido
      del sol y la dirección de los vientos predominantes en la zona.
    </p>
    <p className="second-body">
      Anchipurac dispone la mayor cantidad de superficies de fachadas hacia el
      Norte y el Sur, favoreciendo una exceletente iluminación natural durante
      la mayoría de las horas del día. Además esto le permite captar desde el
      Sur - Este las brisas frescas del verano.
    </p>
  </Wrapper>
);

export default Info;
