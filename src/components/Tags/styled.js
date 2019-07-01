import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 2rem;
  font-style: italic;
  margin-top: 2rem;
  @media screen and (max-width: 1050px) {
    margin-top: 5rem;
    font-size: 12px;
  }
  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
  .green {
    background-color: green;
  }
`;
export const Ball = styled.div`
  margin: 0 1rem;
  background: #0074d9;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;
