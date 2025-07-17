import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { TodoApp } from './componentes/TodoApp'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
