
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
      
      <div className='h-[100vh]  min-w-[240px] overflow-auto'>
        <h1 className='text-4xl font-bold text-center pt-10'>Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
