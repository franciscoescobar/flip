import styled from "styled-components";
export const StyledButton = styled.button`
  background-color: transparent;
  font-size: 3rem;
  text-align: center;
  padding: 0;
  margin: 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  i {
    color: #0074d9;
  }
  .green {
    color: green;
  }
  @media screen and (max-width: 1050px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
    margin: 8px;
  }
`;
