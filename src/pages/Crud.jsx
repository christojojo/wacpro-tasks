import React, { useState } from "react";

const Crud = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Add item
  const handleAdd = () => {
    if (!inputValue) return;

    if (isEditing) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === currentId ? { ...item, name: inputValue } : item
        )
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      const newItem = {
        id: new Date().getTime(),
        name: inputValue,
      };
      setItems([...items, newItem]);
    }

    setInputValue("");
  };

  // Edit item
  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setInputValue(itemToEdit.name);
    setIsEditing(true);
    setCurrentId(id);
  };

  // Delete item
  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>{isEditing ? "Update" : "Add"}</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
