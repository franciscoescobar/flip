import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  border: 2px solid #0074d9;
  border-radius: 50px;
  width: 20rem;
  align-items: center;
  height: 2rem;
  padding: 0 0 0 0.2rem;
  margin: 0 0 1.5rem 1rem;
  @media screen and (max-width: 1200px) {
    width: 18rem;
  }
  @media screen and (max-width: 1050px) {
    width: 13rem;
    height: 1.8rem;
  }
  @media screen and (max-width: 700px) {
    height: 1.4rem;
    width: 8rem;
  }
  i {
    font-size: 26px;
    color: #0074d9;
    margin-right: 1rem;
    @media screen and (max-width: 1050px) {
      font-size: 24px;
      margin-right: 0.5rem;
    }
    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }
  p {
    margin: 0;
    @media screen and (max-width: 1050px) {
      font-size: 13px;
      @media screen and (max-width: 700px) {
        font-size: 9px;
      }
    }
  }
`;
