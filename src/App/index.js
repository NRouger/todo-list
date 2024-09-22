import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'tomar el curso de react', completed: true },
//   { text: 'estudiar react', completed: false },
//   { text: 'usar estados derivados', completed: true },
//   { text: 'cortarme el pelo', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')

function App() {
  //ESTADOS
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    //return de componente appUI donde tengo los demas componentes
    //agrego key-props a appui para recibir porps en mismo componebnte
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

// Componentes => Reciben Propiedades. Elementos => Reciben Atributos. ... Hay que tener en cuenta que en JSX, la sintaxis entre atributos y propiedades es muy parecida, ya que escribimos el valor de las props en los componentes como si fueran atributos, pero estos no lo son.. ... Las props son variables que declaramos en nuestro componente como si fueran parámetros de una función, podemos declarar una unica (Prop) o declarar varias Props utilizando la {Desestructuración}. Para luego posteriormente darles un valor como si fueran argumentos, pero utilizando otro tipo de sintaxis, que es muy parecida a la de los atributos de los elementos HTML, con la diferencia que el otorgamos el valor entre {llaves}. ...

// En cuanto a la propiedad "props.children" esta hace referencia a que React transforma automáticamente a todo lo que se encuentre dentro del componente padre en un elemento "children" , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será "Children". .. Por otro lado existe <React.Fragment> o su sintaxis más corta " <> </> " que es un contenedor invisible que tiene como objetivo envolver todos los componentes JSX dentro de un contenedor padre, esto es debido a que React necesita envolver esos componentes para renderizarlos, y asi no crear nodos innecesarios en el DOM. ..

// Por ultimo, debemos tener en cuenta que podemos renderizar elementos a través de un Array, utilizando en este caso el metodo .map(), y devolviendo el componente "TodoItem" por cada uno de los objetos del array.. Es necesario que le pasemos las props "key={todo.text} text={todo.text}" al componente para que nos muestre un contenido distinto por cada objeto de este array. .. La prop "Key" funciona como un Identificador para objeto del array y es necesaria cuando utilizamos el metodo .map()
