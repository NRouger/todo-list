import React from 'react';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    //ESTADOS
    const {
      item: todos, //renombrar propiedad de un objeto
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const toggleModal = () => {
      setOpenModal(!openModal)
    }

    const completedTodos = todos.filter(
      todo => !!todo.completed //!! doble negacion convierte en booleano el valor
    ).length;
    console.log(completedTodos)

    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
      }
    );

    const completeTodo = (text) => { //funcion que espera texto como parametro
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    }

    const deleteTodo = (text) => { // funcion que espera etexto como parametro para cambiar el valor booleano del segundo elemento del array
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text //busco a traves del index y valido el texto
      )
      newTodos.splice(todoIndex, 1) //marco el elemento como falso
      saveTodos(newTodos) //set del nuevo estado
    }
  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      toggleModal,
    }}>
      {children}
    </TodoContext.Provider>
  )

}

export { TodoProvider, TodoContext };
