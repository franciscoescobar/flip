import React from "react";
import { StyledButton } from "./styled";
const ButtonArrowLeft = ({ children, onButtonClick }) => (
  <StyledButton onClick={onButtonClick}>{children}</StyledButton>
);

export default ButtonArrowLeft;
