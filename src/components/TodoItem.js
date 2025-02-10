import React, { useState } from "react";

const TodoItemDisplay = ({ todo, deleteTodoProps, onEdit }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { status, id, title } = todo;

  return (
    <li className="todo-item">
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={status === "done" ? completedStyle : null}>{title}</span>
    </li>
  );
};

const TodoItemEdit = ({ todo, onCancel, onSave }) => {
  const { status, id, title } = todo;

  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        type="text"
        className="input-edit"
        value={newTitle}
        onChange={handleInputChange}
      />
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={() => onSave(id, newTitle, newStatus)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </li>
  );
};

const TodoItem = ({ todo, deleteTodoProps, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSave = (id, newTitle, newStatus) => {
    updateTodo(id, newTitle, newStatus);
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
