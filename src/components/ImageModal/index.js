import React from "react";
import Modal from "@material-ui/core/Modal";
import { Wrapper, Container } from "./styled";
const ImageModal = ({ open, handleClose, image }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={handleClose}
  >
    <Container onClick={handleClose}>
      <Wrapper onClick={handleClose}>
        <img src={image} alt="modal-imag" onClick={handleClose} />
      </Wrapper>
    </Container>
  </Modal>
);

export default ImageModal;
