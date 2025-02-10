import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
  updateTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
