import React, { useState, useEffect } from "react";
import { store } from "../firebaseconfig";

const Admin = () => {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [todos, setTodos] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const { docs } = await store.collection("todos").get();
      const todosarray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setTodos(todosarray);
    };
    getTodos();
  }, []);

  const setTareas = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setError("La tarea no puede estar vacía");
    }
    if (!descripcion.trim()) {
      setError("La descripción no puede estar vacía");
    }
    if (!descripcion.trim() && !tarea.trim()) {
      setError("Los campos no pueden estar vacíos");
    }
    const todo = {
      tarea: tarea,
      descripcion: descripcion,
    };
    try {
      const data = await store.collection("todos").add(todo);
      const { docs } = await store.collection("todos").get();
      const todosarray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setTodos(todosarray);
    } catch (e) {
      console.log(e);
    }
    setTarea("");
    setDescripcion("");
  };

  const borrarTarea = async (id) => {
    try {
      await store.collection("todos").doc(id).delete();
      const { docs } = await store.collection("todos").get();
      const todosarray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setTodos(todosarray);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>To Do's</h2>
          <form onSubmit={setTareas}>
            <input
              value={tarea}
              onChange={(e) => {
                setTarea(e.target.value);
              }}
              className="form-control"
              placeholder="Introduce la tarea"
              type="text"
            />
            <input
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
              className="form-control mt-3"
              placeholder="Introduce la descripción"
              type="text"
            />
            <input type="submit" className="btn btn-dark btn-block mt-3" />
          </form>
          {error ? (
            <div>
              <p>{error}</p>
            </div>
          ) : (
            <span></span>
          )}
        </div>
        <div className="col">
          <h2>Lista de To Do's</h2>

          <ul className="list-group">
            {todos.length !== 0 ? (
              todos.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item list-group-item-dark"
                >
                  {item.tarea}                  
                  <button 
                  className="btn btn-danger float-right mt-3 mr-2"
                  onClick={(id)=>{borrarTarea(item.id)}}
                  >X</button>
                  <button 
                  className="btn btn-info float-right mt-3 mr-2"                  
                  >Editar</button>                  
                  <ul>{item.descripcion}</ul>
                </li>
              ))
            ) : (
              <span>La lista está vacia</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
