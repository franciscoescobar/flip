import React, { useState } from "react";
import Title from "../../components/Title";
import Info from "../../components/Info";
import { Wrapper, Split, Container } from "./styled";
import { chips } from "../../data";
import ButtonClose from "../../components/ButtonClose";
import { Link } from "react-router-dom";
import ButtonArrowLeft from "../../components/ButtonArrowLeft";
import ButtonArrowRight from "../../components/ButtonArrowRight";
import ImageModal from "../../components/ImageModal";
import eficienciaGeotermica2 from "../../assets/images/10-eficiencia-geotermica a2.jpg";
const Item = ({ match }) => {
  const params = Number(match.params.itemId);
  const actualChip = chips.filter(chip => {
    return chip.first.id === params;
  });
  const actualReversedChip = chips.filter(chip => chip.second.id === params);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleRightClick = () => {
    setPage(page + 1);
  };
  const handleLeftClick = () => {
    setPage(page - 1);
  };
  const handleExitClick = () => {
    setPage(0);
  };
  const chipToSend = () => {
    if (actualChip.length > 0 && page === 0) {
      return actualChip[0].first;
    } else if (actualReversedChip.length > 0 && page === 0) {
      return actualReversedChip[0].second;
    } else if (actualChip.length > 0 && page !== 0) {
      return actualChip[0].first.extra[page - 1];
    } else if (actualReversedChip.length > 0 && page !== 0) {
      return actualReversedChip[0].second.extra[page - 1];
    }
  };
  const subtitle = () => {
    if (actualChip.length > 0 && page !== 0) {
      return actualChip[0].first.extra[page - 1].subtitle;
    } else if (actualReversedChip.length > 0 && page !== 0) {
      return actualReversedChip[0].second.extra[page - 1].subtitle;
    }
  };
  const imageToDisplay1 = () => {
    if (actualChip.length > 0 && page === 0) {
      return actualChip[0].first.image1;
    } else if (actualReversedChip.length > 0 && page === 0) {
      return actualReversedChip[0].second.image1;
    } else if (actualChip.length > 0 && page !== 0) {
      return actualChip[0].first.extra[page - 1].image1;
    } else if (actualReversedChip.length > 0 && page !== 0) {
      return actualReversedChip[0].second.extra[page - 1].image1;
    }
  };
  const imageToDisplay2 = () => {
    if (actualChip.length > 0 && page === 0) {
      return actualChip[0].first.image2;
    } else if (actualReversedChip.length > 0 && page === 0) {
      return actualReversedChip[0].second.image2;
    } else if (actualChip.length > 0 && page !== 0) {
      return actualChip[0].first.extra[page - 1].image2;
    } else if (actualReversedChip.length > 0 && page !== 0) {
      return actualReversedChip[0].second.extra[page - 1].image2;
    }
  };
  const handleImageClick = () => {
    if (actualReversedChip.length > 0 && page === 1) {
      setOpen(true);
    }
  };
  const handleImageModalClose = () => {
    setOpen(false);
  };
  const onListClick = number => {
    console.log(number);
    setPage(number);
  };
  return (
    <Container>
      {(actualChip.length > 0 &&
        actualChip[0].first.extra.length > 0 &&
        page > 0) ||
      (actualReversedChip.length > 0 &&
        actualReversedChip[0].second.extra.length > 0 &&
        page > 0) ? (
        <ButtonArrowLeft onButtonClick={handleLeftClick}>
          <i
            className={
              actualReversedChip.length > 0 &&
              (actualReversedChip[0].second.id === 6 ||
                actualReversedChip[0].second.id === 8 ||
                actualReversedChip[0].second.id === 10)
                ? "fas fa-chevron-circle-left green"
                : "fas fa-chevron-circle-left"
            }
          />
        </ButtonArrowLeft>
      ) : null}

      <Wrapper>
        <Link to="/menu">
          <ButtonClose onButtonClick={handleExitClick}>
            <i
              className={
                actualReversedChip.length > 0 &&
                (actualReversedChip[0].second.id === 6 ||
                  actualReversedChip[0].second.id === 8 ||
                  actualReversedChip[0].second.id === 10)
                  ? "far fa-times-circle green"
                  : "far fa-times-circle"
              }
            />
          </ButtonClose>
        </Link>
        <Split>
          <Title />
          <Info
            chip={chipToSend()}
            subtitle={subtitle()}
            handleListClick={onListClick}
          />
        </Split>
        <Split>
          <img src={imageToDisplay1()} alt="image1" />
        </Split>
        <Split>
          <img
            onClick={handleImageClick}
            src={imageToDisplay2()}
            alt="image2"
          />
        </Split>
      </Wrapper>
      {(actualChip.length > 0 &&
        actualChip[0].first.extra.length > 0 &&
        page < 5) ||
      (actualReversedChip.length > 0 &&
        actualReversedChip[0].second.extra.length > 0 &&
        page < 2) ? (
        <ButtonArrowRight onButtonClick={handleRightClick}>
          <i
            className={
              actualReversedChip.length > 0 &&
              (actualReversedChip[0].second.id === 6 ||
                actualReversedChip[0].second.id === 8 ||
                actualReversedChip[0].second.id === 10)
                ? "fas fa-chevron-circle-right green"
                : "fas fa-chevron-circle-right"
            }
          />
        </ButtonArrowRight>
      ) : null}
      <ImageModal
        open={open}
        handleClose={handleImageModalClose}
        image={eficienciaGeotermica2}
      />
    </Container>
  );
};

export default Item;
