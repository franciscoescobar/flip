import React from "react";
import Title from "../../components/Title";
import styled from "styled-components";
import Info from "../../components/Info";

const Wrapper = styled.div`
  display:flex;
  height: 80%;
  width: 80%;
  margin: 5% auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;
const Split = styled.div`
  flex: 1 1 33%;
`;
const Item = ({ match }) => {
  const params = match.params.menuItem;
  return (
    <Wrapper>
      <Split>
        <Title />
        <Info />
      </Split>
      <Split>
        <img src="" alt="imagen" />
      </Split>
      <Split>
        <img src="" alt="imagen" />
      </Split>
    </Wrapper>
  );
};

export default Item;
