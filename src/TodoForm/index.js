import React from "react"
import { TodoContext } from '../TodoContext'
import "./TodoForm.css"

function TodoForm() {

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue)
      setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="TodoForm">
        <label className="TodoForm-label">Add a task and keep track of them</label>
        <textarea
          placeholder="Call uncle John"
          className="TodoForm-textarea"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="TodoForm-buttons--grid">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >cancel</button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >add</button>
        </div>
      </form>
    </div>
  )
}

export { TodoForm };
