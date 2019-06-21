import React from "react";
import Chip from "../Chip";
import ReveresedChip from "../ReversedChip";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;
const Chips = ({ chips }) => (
  <Wrapper>
    {chips.map((chip, index) => {
      return (
        <React.Fragment key={chip}>
          <Chip text={chip} />
          <ReveresedChip text={chip} />
        </React.Fragment>
      );
    })}
  </Wrapper>
);

export default Chips;
