import React, { useEffect, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButtons.css'

function CreateTodoButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  const {
    toggleModal,
  } = React.useContext(TodoContext)

  return (
    <div className='button-grid'>
      {isVisible && (
        <button
          type="button"
          className="CreateTodoButton"
          onClick={
            (e) => {
              toggleModal()
            }
          }
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      )}

    </div>
  )
};

export { CreateTodoButton };
