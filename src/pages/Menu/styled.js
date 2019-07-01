import styled from "styled-components";
export const Wrapper = styled.div`
  background: white;
  height: 80%;
  width: 80%;
  margin: 5% auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media screen and (max-width: 700px) {
    height: auto;
  }
`;
