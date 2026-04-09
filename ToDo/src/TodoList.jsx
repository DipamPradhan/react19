import { useState } from "react";
export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addItem = () => {
    if (todo.trim() === "") {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: todo,
      done: false,
      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    setItems([...items, newItem]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  };

  if (items.length === 0) {
    return (
      <div>
        <input
          type="text"
          placeholder="Add todo text"
          value={todo}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add Item</button>
        <p>No todos yet</p>
      </div>
    );
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo text"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={addItem}>Add Item</button>

      <table className="w-full border border-gray-300 mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">S.N.</th>
            <th className="border px-4 py-2 text-left">Todo</th>
            <th className="border px-4 py-2 text-left">Created At</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>

              <td
                className={"border px-4 py-2"}
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {console.log(item.done)}
                {item.text}
              </td>

              <td className="border px-4 py-2">{item.createdAt}</td>

              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => toggleDone(item.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  {item.done ? "Un-do" : "Done"}
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
