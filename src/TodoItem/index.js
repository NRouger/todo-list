import './cards.css'

import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {
  return (
    <li>
      <div className="card-item">
        <div>
          <CompleteIcon
            className="Todo-button"
            completed={props.completed}
            onComplete={props.onComplete}
          />
        </div>
        <div>
          <p
           className={`card-text ${props.completed ? 'strike-through' : ''}`}>
            {props.text}
          </p>
        </div>
        <div>
          <DeleteIcon
            onDelete={props.onDelete}
          />
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
