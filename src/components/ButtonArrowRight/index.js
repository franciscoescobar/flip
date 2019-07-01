import React from "react";
import { StyledButton } from "./styled";
const ButtonArrowRight = ({ children, onButtonClick }) => (
  <StyledButton onClick={onButtonClick}>{children}</StyledButton>
);

export default ButtonArrowRight;
