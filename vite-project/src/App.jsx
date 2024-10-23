import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Todos from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])

useEffect(() => {
  // axios('https://jsonplaceholder.typicode.com/todos')
  // .then(res => console.log(res)
  // =============================== 
 
  // axios('https://jsonplaceholder.typicode.com/todos/',{
  //   params:{
  //     _limit:10,
  //     _start:20
  //   }
  // })
  // .then(res => setTodos(res.data)
  // ) 
  // ====================================

  axios({
    baseURL:"https://jsonplaceholder.typicode.com/",
    url:'todos',
    params:{
     _limit:20,
      start:30
    }
  }).then(res=> setTodos(res.data))
 }, [])

return (
   <div className='App'>
    <h1>Todos</h1> <hr/>
    <Todos todos={todos} setTodos={setTodos}/>
   </div>
  
  )
}
export default App
