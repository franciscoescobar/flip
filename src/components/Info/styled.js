import styled from "styled-components";
export const SubTitle = styled.h3`
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: #2480b3;
  @media screen and (max-width: 1050px) {
    font-size: 14px;
  }
`;
export const Title = styled.h1`
  margin: -0.1rem 0;
  font-weight: 700;
  font-size: 22px;
  color: #3c3c3b;
  @media screen and (max-width: 1050px) {
    font-size: 20px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
  > * {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  hr {
    border: 1px solid #353536;
    width: 80%;
  }
  .green {
    color: green;
  }
  .first-body {
    font-style: italic;
    color: #575756;
    @media screen and (max-width: 1050px) {
      font-size: 14px;
    }
  }
  .second-body {
    font-weight: 700;
    color: #575756;
    @media screen and (max-width: 1050px) {
      font-size: 14px;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    p {
      height: 0.1rem;
    }
  }
`;
