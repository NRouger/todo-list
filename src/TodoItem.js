import './cards.css'

import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
  return (
    <li>
      <div className="card-item">
        <CompleteIcon
          className="Todo-button"
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p
         className={`card-text ${props.completed ? 'strike-through' : ''}`}>
          {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
        />
      </div>
    </li>
  );
}

export { TodoItem };
