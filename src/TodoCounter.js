import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    total === completed ?

    <h1>¡Has completado todas tus tareas!</h1>

    :

    <h1>Has completado {completed} de {total} TODOs</h1>

  )
}

export { TodoCounter };
