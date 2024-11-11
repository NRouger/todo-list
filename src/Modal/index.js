import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "../Modal/Modal.css"

function Modal({children}){

  const {
    openModal,
    toggleModal
  } = React.useContext(TodoContext)

  return ReactDOM.createPortal(
    // primer div es el background modal,
    // y children son todas las props(funciones, elementos, atributos, etc)
      <div className="ModalBackground">
        {children}
      </div>,
      document.getElementById('modal')
  )
}

export { Modal };
