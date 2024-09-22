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

    }, 1000);
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
