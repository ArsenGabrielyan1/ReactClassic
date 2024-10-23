import React from 'react'
import './Todos.css'

export default function Todos({todos,setTodos}) {
 const handleDelete = (index) =>{
  setTodos(todos.toSpliced(index,1))
 }
  
  return (
  <div className='Todos'>
{
todos.map((elm,index)=>{
  return (
   <div className='Todo' key={elm.id}>
   <p>{elm.title}</p>
<button onClick={()=>handleDelete(index)}>Delete</button>
   </div>
  )})
}
</div>
  )
}
