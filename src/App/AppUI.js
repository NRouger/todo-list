import React from 'react';
import { useState } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import '../TodoSearch/searchBar.css'

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>
      <div className='container'>
        <div className='cards-grid'>
          <div className='card-search grid-search'>
            <h1>Add something you'd like <br/>to get done, or search for it</h1>
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <CreateTodoButton />
          </div>
          <div className='cards--list'>
            <TodoCounter
              completed={completedTodos}
              total={totalTodos}
              />
            <TodoList>
              {loading && <p>Cargando...</p>}
              {error && <p>Hubo un error.</p>}
              {!(loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}
            {/* lo llamamos como si fuese un elemento */}
              {searchedTodos.map(todo => (
                <TodoItem
                  // todoItem renderiza con <p> el texto de nuestro
                  // array 'defaultTodo' através de .map las props
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  // onC y onD a través de una función cambio el valor booleano de sus elementos y esto cambia su conteo luego
                />
              ))}
            {/*primero creamos la estructura, llamamos y despues creamos los componentes uno por uno*/}
            </TodoList>
          </div>
        </div>
      </div>
    </>
  )
}

export { AppUI };
