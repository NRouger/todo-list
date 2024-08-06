function TodoList(props) {
  return (
    <ul className="ul-list">
      {props.children}
    </ul>
  )
}

export { TodoList };
