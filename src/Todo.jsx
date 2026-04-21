import "./Todo.css";
import { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [editindex, setEditindex] = useState(null);
  const handleAdd = () => {
    if (input.trim() === "") {
      alert("enter something");
      return;
    }
    if (
      result.includes(input.toLowerCase()) == true ||
      result.includes(input.toUpperCase()) == true
    ) {
      return;
    }
    if (editindex != null) {
      const update = result.map((item, index) => {
        return index === editindex ? input : item;
      });
      setResult(update);
      setEditindex(null);
      setInput("");
      return;
    }
    setResult([...result, input]);
  setInput("");
     localStorage.setItem("result",result)
  };
  const handleClear = () => {
    setResult([]);
    setInput("");
  };
  const handleDelete = (i) => {
    const newResult = result.filter((_, index) => index != i);
    setResult(newResult);
    localStorage.setItem("result",result)
  };
  const handleUpdate = (i) => {
    setInput(result[i]);
    setEditindex(i);
  };
  return (
    <div className="container">
      <h3>Welcome To Todo </h3>
      <div className="todo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter your choice"
        ></input>
        <button onClick={handleAdd} id="add">
          Add
        </button>
        <button id="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="todolist">
        <ul>
          {result.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <div>
                  {" "}
                  <button id="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                  <button id="update" onClick={() => handleUpdate(index)}>
                    Update
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
