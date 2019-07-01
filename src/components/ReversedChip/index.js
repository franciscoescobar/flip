import React from "react";
import { Wrapper, Container } from "./styled";
import { withRouter } from "react-router-dom";
const ReversedChip = ({ chip, history, color }) => {
  const onChipClick = event => {
    history.push(`/menu/${chip.id}`);
  };
  return (
    <Container>
      <Wrapper onClick={onChipClick} className={color ? "green" : ""}>
        <i
          className={color ? "fas fa-plus-circle green" : "fas fa-plus-circle"}
        />
        <p>{chip.title}</p>
      </Wrapper>
    </Container>
  );
};

export default withRouter(ReversedChip);
