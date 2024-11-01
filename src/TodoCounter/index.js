import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    totalTodos === completedTodos ?

    <h1>¡Has completado todas tus tareas!</h1>

    :

    <h1>Has completado {completedTodos} de {totalTodos} TODOs</h1>

  )
}

export { TodoCounter };
