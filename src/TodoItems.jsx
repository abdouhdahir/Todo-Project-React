import React, { useState } from 'react';
import TodoSearch from "./TodoSearch";
import { IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

const TodoItems = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    const newArray = {
      id: todos.length + 1,
      descriptions: inputText,
      Fait: false
    };
    setTodos([...todos, newArray]);
    setInputText("");
  };

  const onSupprime = (id) => {
    const filterSupp = todos.filter((items) => items.id !== id);
    setTodos(filterSupp);
  };

  const onFait = (id) => {
    const newTodos = [...todos]
    const FindTodo = newTodos.find((item) => item.id === id)
    FindTodo.Fait = !FindTodo.Fait
    setTodos(newTodos)
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-10/12 items-center justify-between border-2  border-violet-400 h-full   m-24'>
        <div className='flex items-center gap-5 w-7/12 '>
          <IoMdSearch className='text-xl text-violet-400 ml-3'/>
          <input 
            type="text" 
            placeholder='Hello' 
            value={inputText} 
            className='w-full outline-none' 
            onChange={(e) => setInputText(e.target.value)} 
          />
        </div>
        <div className='flex items-center text-center justify-center gap-5 bg-violet-400 w-3/12 py-4 cursor-pointer' onClick={addTodo}>
          <FaPlusCircle className='text-white text-xl'/>
          <button className='text-white text-xl' >
            Ajoute un évènement
          </button>
        </div>
      </div>
      {todos.map((items) => (
        <TodoSearch 
          key={items.id}
          descriptions={items.descriptions}
          onSupprimeItems={() => onSupprime(items.id)}
          onFaitItems={() => onFait(items.id)}
          Fait={items.Fait}
        />
      ))}
    </div>
  );
};

export default TodoItems;
