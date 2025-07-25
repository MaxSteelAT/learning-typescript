import { useState } from "react";
import { ListaTareas } from "./listaTareas";

export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])
  
  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTareas = (index:number) => {
    setListaTareas(tareas => tareas.filter((_,i) => i !==index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTareas}></ListaTareas>
    </div>
  )
}