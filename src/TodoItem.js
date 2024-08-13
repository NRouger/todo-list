import { useState } from 'react';
import './cards.css'

function TodoItem(props) {
  //useState para controlar el estado de mis etiquetas con "onClick"
  // por lo cual no se necesita de addEventListener
  const [isStriked, setIsStriked] = useState(false);

  const handleToggleStrike = () => {
    setIsStriked(!isStriked)
  }

  return (
    <li>
      <div className="card-item">
        <span
        className={`${isStriked ? 'Todo-button--completed' : 'Todo-button'}`}
        onClick={handleToggleStrike}>
          v{props.completed}
        </span>

          {/* <i class="fa-regular fa-circle-check"></i> */}
        <p
        className={`card-text ${isStriked ? 'strike-through' : ''}`}>
          {props.text}
        </p>

        <span
        className='Todo-button'>
          x
        </span>
      </div>
    </li>
  );
}

export { TodoItem };
