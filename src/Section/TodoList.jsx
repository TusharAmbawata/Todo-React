import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className='container py-2'>
      <h2 className='my-3'>Todo's</h2>
      {todos.length === 0 ? (
        <p className="text-muted">No todos yet. Add one!</p>
      ):(
      <div className="d-flex flex-wrap">
      {todos.map((item,index) =>(
        <div class="card m-3 " style={{ width: "18rem"}} key={index}>
          <div class="card-header">
            {item.todo}
          </div>
          <div class="card-body">
            <h5 class="card-title">{item.tittle}</h5>
            <p class="card-text">{item.description}</p>
            <a href="#" class="btn btn-primary">Edit</a>
            <button  class="btn btn-danger mx-2"
            onClick={()=>deleteTodo(index)}
            >Delete</button>
          </div>
        </div>
          ))}
          </div>
      )}
    </div>
  )
}

export default TodoList
