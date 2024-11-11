import React from "react";
import { TodoContext } from "../TodoContext/index";
import { useState } from "react";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <input
      placeholder="Practicar react.js"
      className="search-bar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
  )
}
export { TodoSearch };
