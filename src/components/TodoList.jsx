import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleComplete } from "../todo/TodoSlice";

function TodoList() {

  

  const todos = useSelector(state => state.todos);
  
  
  const dispatch = useDispatch();

  // document.body.style.height = `${todos.length*300 + 100}px`

  let count = 0;
  return (
    <div className={`m-auto flex box-border min-w-[240px] max-[470px]:text-[0.7rem] overflow-y-auto ${todos.length===0?'p-0':'p-2'} max-w-[60vw] backdrop-blur-lg  shadow-[0px_0px_10px_0px_#34292975] gap-3 flex-col my-5`}>
      {todos.map((todo) => {
        count++;

        return (
          <div
            className={`w-[100%]  box-border px-3 py-5 flex ${
              todo.completed ? "bg-green-900  duration-300" : "bg-blue-400"
            } justify-between items-center rounded-md flex-wrap transition overflow-x-auto `}
            key={count}
          >
            <div className="flex items-center overflow-x-auto scrollbar max-[470px]:text-[0.7rem] m-2">
              <span className="text-[1.3rem] max-[470px]:text-[0.9rem]">{count}.</span>
              <div className="text-[1.3rem] font-bold ml-2 text-wrap max-[470px]:text-[0.9rem]">
                {todo.text}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                className={`border-solid border-2 border-cyan-700 rounded-md bg-cyan-950 text-blue-300  hover:bg-green-900 transition-all duration-[0.3s] p-2 `}
                onClick={() => dispatch(toggleComplete(todo.id))}
              >
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
              <button
                className=" border-solid border-2 border-cyan-700 rounded-md bg-cyan-950 text-blue-300 hover:bg-red-500 transition-all duration-[0.3s] p-2 mr-2"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
