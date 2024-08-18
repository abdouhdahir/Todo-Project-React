import TodoItems from "./TodoItems"

const TodoContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl font-black">Todo Project</h1>
      <TodoItems/>
    </div>
  )
}

export default TodoContainer