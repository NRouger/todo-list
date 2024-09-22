import './CreateTodoButtons.css'

function CreateTodoButton() {
  return (
    <div>
      <button
      type="button"
      className="CreateTodoButton"
      onClick={
        (event) => {
          console.log('click click')
          console.log(event)
          console.log(event.target)
        }
      }
      >+</button>
    </div>
  )
};

export { CreateTodoButton };
