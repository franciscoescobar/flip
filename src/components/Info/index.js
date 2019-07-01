import React from "react";
import { Wrapper, SubTitle, Title } from "./styled";
const Info = ({ chip, subtitle, handleListClick }) => (
  <Wrapper>
    {chip.id === 6 || chip.id === 8 || chip.id === 10 ? (
      <SubTitle className="green">Energías</SubTitle>
    ) : (
      <SubTitle>Arquitectura bioclimática</SubTitle>
    )}
    <hr />
    <Title>{chip.title.toUpperCase()}</Title>
    {subtitle ? <Title>{subtitle}</Title> : null}

    <hr />
    <p className="first-body">{chip.body1}</p>
    <p className="second-body">{chip.body2}</p>
    {!subtitle && chip.id === 7 ? (
      <div className="list">
        <p className="second-body" onClick={() => handleListClick(1)}>
          1.Terreno
        </p>
        <p className="second-body" onClick={() => handleListClick(2)}>
          2.Muros
        </p>
        <p className="second-body" onClick={() => handleListClick(3)}>
          3.Losas
        </p>
        <p className="second-body" onClick={() => handleListClick(4)}>
          4.Pisos
        </p>
        <p className="second-body" onClick={() => handleListClick(5)}>
          5.Cubiertas
        </p>
      </div>
    ) : null}
  </Wrapper>
);

export default Info;
