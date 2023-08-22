import React from "react";
import { useModal } from "../Helps/useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h1>Ventana Modal 1</h1>
        <p>Img Random</p>
        <img src="https://placeimg.com/400/400/any" alt="..." />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h1>Ventana Modal 2</h1>
        <p>Img Nature</p>
        <img src="https://placeimg.com/400/400/nature" alt="..." />
      </Modal>
    </div>
  );
};

export default Modals;
