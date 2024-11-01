import React from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButtons.css'
import { ModalStyled } from '../Modal/ModalBootstrap'

function CreateTodoButton() {
  const {
    toggleModal
  } = React.useContext(TodoContext)

  return (
    <div className='button-grid'>
      <button
        type="button"
        className="CreateTodoButton"
        onClick={
          (event) => {
            toggleModal()
          }
        }
      >
        <i class="fa-solid fa-plus"></i>
      </button>

    </div>
  )
};

export { CreateTodoButton };
