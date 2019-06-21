import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  border: 2px solid lightblue;
  border-radius: 50px;
  width: 20rem;
  align-items: center;
  height: 28px;
  padding: 0 0 0 0.2rem;
  margin: 0 0 1rem 1rem;
  flex-basis: 33%;
  .reverse {
    flex-direction: row-reverse;
    padding: 0 0 0 0.2rem;
  }
  .reverse i {
    font-size: 24px;
    color: lightblue;
    margin-left: 1rem;
  }
  i {
    font-size: 24px;
    color: lightblue;
    margin-right: 1rem;
  }
  p {
    margin: 0;
  }
`;
