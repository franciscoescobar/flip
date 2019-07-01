import React from "react";
import { StyledButton } from "./styled";
const ButtonClose = ({ children, onButtonClick }) => (
  <StyledButton onClick={onButtonClick}>{children}</StyledButton>
);

export default ButtonClose;
