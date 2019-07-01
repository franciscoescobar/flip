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
        <React.Fragment key={index}>
          <Chip chip={chip.first} />
          <ReveresedChip
            chip={chip.second}
            color={
              chip.second.id === 6 ||
              chip.second.id === 8 ||
              chip.second.id === 10
                ? true
                : false
            }
          />
        </React.Fragment>
      );
    })}
  </Wrapper>
);

export default Chips;
