import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  border: 2px solid #0074d9;
  border-radius: 50px;
  width: 20rem;
  align-items: center;
  height: 2rem;
  margin: 0 0 1.5rem 1rem;
  flex-direction: row-reverse;
  padding-right: 0.2rem;
  @media screen and (max-width: 1200px) {
    width: 18rem;
  }
  @media screen and (max-width: 1050px) {
    height: 1.8rem;
    width: 13rem;
  }
  @media screen and (max-width: 700px) {
    height: 1.4rem;
    width: 8rem;
  }
  i {
    font-size: 26px;
    color: #0074d9;
    margin-left: 1rem;
    @media screen and (max-width: 1050px) {
      margin-left: 0.5rem;
      font-size: 24px;
    }
    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }
  p {
    margin: 0;
    @media screen and (max-width: 1050px) {
      font-size: 13px;
    }
    @media screen and (max-width: 700px) {
      font-size: 9px;
    }
  }
  .green {
    color: green;
  }
`;
export const Container = styled.div`
  display: flex;
  > .green {
    border: 2px solid green;
  }
`;
