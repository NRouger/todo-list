import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          //estado inicial app
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setLoading(false);
          setItem(parsedItem)
        }
      } catch(error) {
        setLoading(false)
        setError(true)
      }

    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //cuando no hay un array como dependencia, al estar llamando a estados
     //se va a seguir renderizando en un loop, por lo cuale s importante
     // agregar un array vacio


  const saveItem = (newItem) => {
    //actualizamos localStorage guardando nuevos Todos
    localStorage.setItem(itemName, JSON.stringify(newItem));
    //y actualizamos el ESTADO
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'tomar el curso de react', completed: true },
//   { text: 'estudiar react', completed: false },
//   { text: 'usar estados derivados', completed: true },
//   { text: 'cortarme el pelo', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')
