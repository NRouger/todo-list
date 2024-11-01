import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TodoContext } from "../TodoContext";
import "./Modal.css"

function ModalStyled(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-bs"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalBootstrap() {

  const {
    openModal,
    toggleModal
  } = React.useContext(TodoContext)

  return (
    <ModalStyled
    show={openModal}
    onHide={() => toggleModal()}
  />
  )
}
export { ModalBootstrap };
// const Overlay = styled.div`
//   box-sizing: border-box;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(52, 64, 84, 0.6);
//   backdrop-filter: blur(8px);
//   animation: fadein 0.5s;

//   @keyframes fadein {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// const Modal = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 25rem;
//   height: 18rem;
//   background: white;
//   border-radius: 0.75rem;
//   box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
//     0px 8px 8px -4px rgba(16, 24, 40, 0.04);
//   transition: all 0.5s ease;
//   z-index: 1;
// `;

// const CancelButton = styled.button`
//   // Cancel button styles
// `;
