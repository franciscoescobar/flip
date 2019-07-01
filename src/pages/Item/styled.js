import styled from "styled-components";

export const Wrapper = styled.div`
  position:relative;
  background: white;
  display:flex;
  height: 80%;
  margin: 5% 20%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Split = styled.div`
  flex: 1 1 300px;
  min-width: 300px;
  img {
    height: 100%;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
  }
`;
