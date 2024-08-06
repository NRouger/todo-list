import './cards.css'

function TodoItem(props) {
  return (
    <li>
      <div className="card-item">
        <span>V{props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </div>
    </li>
  );
}

export { TodoItem };
