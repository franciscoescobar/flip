import React from "react";
import { Wrapper } from "./styled";
import { withRouter } from "react-router-dom";
const Chip = ({ chip, history }) => {
  const onChipClick = event => {
    history.push(`/menu/${chip.id}`);
  };
  return (
    <div>
      <Wrapper onClick={onChipClick}>
        <i className="fas fa-plus-circle" />
        <p>{chip.title}</p>
      </Wrapper>
    </div>
  );
};

export default withRouter(Chip);
