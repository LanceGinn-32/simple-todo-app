import React, { useState } from "react";

const TodoItemDisplay = ({ todo, deleteTodoProps, onEdit }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

const TodoItemEdit = ({ todo, onCancel, onSave }) => {
  const { completed, id, title } = todo;

  const [newTitle, setNewTitle] = useState(title);

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <li className="todo-item">
      <input type="text" value={newTitle} onChange={handleInputChange} />
      <button onClick={() => onSave(id, newTitle)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </li>
  );
};

const TodoItem = ({ todo, deleteTodoProps, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSave = (id, newTitle) => {
    updateTodo(id, newTitle);
    setIsEditing(false);
  };

  return isEditing ? (
    <TodoItemEdit
      todo={todo}
      onCancel={() => setIsEditing(false)}
      onSave={onSave}
    />
  ) : (
    <TodoItemDisplay
      todo={todo}
      deleteTodoProps={deleteTodoProps}
      onEdit={() => setIsEditing(true)}
    />
  );
};

export default TodoItem;
