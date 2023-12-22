import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../todo/TodoSlice'

function TodoForm() {
    const todos = useSelector(state => state.todos)
    const [dark,setDark] = useState(false)
    const [field,setField] = useState('')

    const dispatch = useDispatch()

    const inputSubmit = (e) =>{
        e.preventDefault()
        if(field.length == 0){
            alert('Enter a valid todo')
        }
        else{
            dispatch(addTodo(field))
        }
        setField('')
        
    }

    const toggleMode = () =>{

      const bodyStyle = document.body.style
        if(dark){
          setDark(false)
          bodyStyle.background = '#b1d1e4'
          bodyStyle.transition = 'all'
          bodyStyle.transitionDuration = '0.3s'
        }
        else{
          setDark(true)
          bodyStyle.background = '#1b3c4f'
          bodyStyle.transition = 'all'
          bodyStyle.transitionDuration = '0.3s'
        }
    }

    


  return (
    <div className='m-auto flex flex-col max-w-[60vw]  min-w-[240px] max-[470px]:text-[0.7rem]'>
      <div className='flex justify-between gap-3 items-center'>
        <span className='py-4 font-[500] text-2xl text-center mx-2'>Add Todo</span>
        <button className='text-xl font-[500] mx-2' onClick={toggleMode}>{dark?'LightMode':'DarkMode'}</button>
      </div>
      <div className='flex justify-center min-w-20 gap-5 py-2 flex-wrap shadow-[0px_3px_10px_0px_#21221a57]'>
        <input type="text" className='w-[80%] py-2 px-3 max-[470px]:text-[0.9rem] focus:outline-cyan-600 focus:duration-500 outline-none rounded-md text-[1.3rem] bg-transparent'
        placeholder='Enter a Todo'
        onChange={(e)=> setField(e.target.value)} value={field}/>
        <button className='p-4 bg-red-400 rounded-md hover:bg-red-700 hover:duration-200'
        onClick={inputSubmit}
        >Add to List</button>
      </div>
    </div>
  )
}

export default TodoForm
