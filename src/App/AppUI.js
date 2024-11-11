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
// import { ModalBootstrap } from '../Modal/ModalBootstrap';
import { TodoForm } from "../TodoForm";
import { TodoContext } from '../TodoContext';

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
          <h1><strong>Too many tasks? Search here</strong></h1>
          <div className='card-search grid-search'>
            <TodoSearch />
          </div>
          <div className='cards--list'>
            <div className='cards--grid-list'>
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

              <CreateTodoButton
                setOpenModal={setOpenModal}
              />

              {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { AppUI };
