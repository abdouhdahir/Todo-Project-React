import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";



const TodoSearch = ({onSupprimeItems,onFaitItems,descriptions,Fait}) => {
  return (
    <div className='flex flex-col'>
      <div className={`group flex justify-between items-center w-8/12 mb-10 ml-36 p-2 shadow-xl hover:bg-violet-300 ${Fait ? "line-through text-gray-400 bg-violet-300 opacity-3 b" : ""}
`} >
        <input className={`group-hover:text-white bg-transparent outline-none ${Fait ? "group-hover:text-gray-400" : ""}`}
        type='text'
        defaultValue={descriptions}
        ></input>
        <div className='flex gap-5 items-center'>
        <FaRegCheckCircle className='text-green-500 cursor-pointer' onClick={onFaitItems}/>
        <FaTrash className='text-red-500 cursor-pointer' onClick={onSupprimeItems}/>
        </div>
      </div>
    </div>
  )
}

export default TodoSearch
