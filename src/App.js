import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './cardsGrid.css'
import './fonts.css'
import './createBar.css'
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'tomar el curso de react', completed: false },
  { text: 'estudiar react', completed: false },
  { text: 'cortarme el pelo', completed: false }];

function App() {
  return (
    <>
      <div className='cards-grid'>
        <div className='grid-search card-search'>
          <h1>Add something you'd like <br/> to get done</h1>
          <TodoSearch />
          <CreateTodoButton />
        </div>
        <div className='grid-list'>
          <TodoCounter completed={16} total={25} />
          <TodoList>
          {/* lo llamamos como si fuese un elemento */}
            {defaultTodos.map(todo => (
              <TodoItem
                // todoItem renderiza con <p> el texto de nuestro
                // array 'defaultTodo' através de .map las props
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          {/*primero creamos la estructura, llamamos y despues creamos los componentes uno por uno*/}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;

// Componentes => Reciben Propiedades. Elementos => Reciben Atributos. ... Hay que tener en cuenta que en JSX, la sintaxis entre atributos y propiedades es muy parecida, ya que escribimos el valor de las props en los componentes como si fueran atributos, pero estos no lo son.. ... Las props son variables que declaramos en nuestro componente como si fueran parámetros de una función, podemos declarar una unica (Prop) o declarar varias Props utilizando la {Desestructuración}. Para luego posteriormente darles un valor como si fueran argumentos, pero utilizando otro tipo de sintaxis, que es muy parecida a la de los atributos de los elementos HTML, con la diferencia que el otorgamos el valor entre {llaves}. ...

// En cuanto a la propiedad "props.children" esta hace referencia a que React transforma automáticamente a todo lo que se encuentre dentro del componente padre en un elemento "children" , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será "Children". .. Por otro lado existe <React.Fragment> o su sintaxis más corta " <> </> " que es un contenedor invisible que tiene como objetivo envolver todos los componentes JSX dentro de un contenedor padre, esto es debido a que React necesita envolver esos componentes para renderizarlos, y asi no crear nodos innecesarios en el DOM. ..

// Por ultimo, debemos tener en cuenta que podemos renderizar elementos a través de un Array, utilizando en este caso el metodo .map(), y devolviendo el componente "TodoItem" por cada uno de los objetos del array.. Es necesario que le pasemos las props "key={todo.text} text={todo.text}" al componente para que nos muestre un contenido distinto por cada objeto de este array. .. La prop "Key" funciona como un Identificador para objeto del array y es necesaria cuando utilizamos el metodo .map()
