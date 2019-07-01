import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2rem;
  color: #9d9d9c;
  @media screen and (max-width: 700px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
  }
  .grey {
    color: #525252;
    .item {
    }
  }
  h1 {
    font-weight: 900;
    font-size: 24px;
    @media screen and (max-width: 1050px) {
      font-size: 20px;
    }
    @media screen and (max-width: 700px) {
      font-size: 16px;
      margin-right: 2rem;
    }
  }
  p {
    margin-top: -10px;
    margin-right: 50px;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    @media screen and (max-width: 1050px) {
      font-size: 16px;
    }
    @media screen and (max-width: 700px) {
      font-size: 14px;
    }
  }
`;
