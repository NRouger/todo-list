import React from "react";
import { useState } from "react";

function TodoSearch({
  searchValue,
  setSearchValue // props destructuradas
}) {
  return (
    <input
      placeholder="Practicar con react.js"
      className="search-bar"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
  )
}
export { TodoSearch };
