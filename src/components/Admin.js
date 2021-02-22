import React, {useState, useEffect} from 'react'
import { store } from "../firebaseconfig";

const Admin = () => {

const [tarea, setTarea] = useState('')
const [descripcion, setDescripcion] = useState('')
const [id, setId] = useState('')
const[error, setError] = useState('')

const setTareas= async (e) => {
    e.preventDefault()
    if(!tarea.trim()){
        setError('La tarea no puede estar vacía')
    }
    if(!descripcion.trim()){
        setError('La descripción no puede estar vacía')
    }
    if(!descripcion.trim() && !tarea.trim()){
        setError('Los campos no pueden estar vacíos')
    }
    const todo = {
        tarea: tarea,
        descripcion:descripcion
    }
    try{
        
        const data = await store.collection('todos').add(todo)
        console.log('tarea añadida')
        
    }
    catch(e){
        console.log(e)}
    setTarea('')
    setDescripcion('')
}
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>To Do's</h2>
                    <form onSubmit={setTareas}>
                        <input 
                        value={tarea}
                        onChange={(e) => {setTarea(e.target.value)}}
                        className="form-control"
                        placeholder="Introduce la tarea"
                        type="text"
                        />
                        <input
                        value={descripcion}
                        onChange={(e) => {setDescripcion(e.target.value)}}
                        className="form-control mt-3"
                        placeholder="Introduce la descripción"
                        type="text"
                        />
                        <input type="submit" className="btn btn-dark btn-block mt-3"/>
                    </form>
                    {
                        error ? 
                        (<div>
                            <p>{error}</p>
                        </div>)
                        :
                        (<span></span>)
                    }

                </div>
                <div className="col">
                    <h2>Lista de To Do's</h2>
                </div>

            </div>
        </div>
    )
}

export default Admin
