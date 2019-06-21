import React from "react";
import { Wrapper } from "./styled";
import { withRouter } from "react-router-dom";
const Chip = ({ text, history }) => {
  const onChipClick = event => {
    history.push(`/menu/${text}`);
  };
  return (
    <Wrapper onClick={onChipClick}>
      <i className="fas fa-plus-circle" />
      <p>Orientacion</p>
    </Wrapper>
  );
};

export default withRouter(Chip);
