import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
// eslint-disable-next-line no-unused-vars
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { CreateTodoButton } from '../CreateTodoButton';
import '../TodoSearch/searchBar.css'
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { ModalBootstrap } from '../Modal/ModalBootstrap';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <div className='container'>
        <div className='cards-grid'>
          <div className='card-search grid-search'>
            <h1>Add something you'd like <br/>to get done, or search for it</h1>
            <TodoSearch />
          </div>
          <div className='cards--list'>
            <TodoCounter />
                <TodoList>
                {loading && <TodosLoading/>}
                {error && <p>Hubo un error.</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}
                {searchedTodos.map(todo => (
                  <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              {/*primero creamos la estructura, llamamos y despues creamos los componentes uno por uno*/}
              </TodoList>

              <CreateTodoButton />
              
              {openModal && (
                <ModalBootstrap>
                  La funcionalidad de agregar todos
                </ModalBootstrap>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export { AppUI };
