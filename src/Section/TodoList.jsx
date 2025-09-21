import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <div className='container py-2'>
      <h2 className='my-3'>Todo's</h2>
      {todos.length === 0 ? (
        <p className="text-muted">No todos yet. Add one!</p>
      ):(
      <div className="d-flex flex-wrap">
      {todos.map((item) =>(
        <div class="card m-3 " style={{ width: "18rem"}}>
          <div class="card-header">
            {item.todo}
          </div>
          <div class="card-body">
            <h5 class="card-title">{item.tittle}</h5>
            <p class="card-text">{item.description}</p>
            <a href="#" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-danger mx-2">Delete</a>
          </div>
        </div>
          ))}
          </div>
      )}
    </div>
  )
}

export default TodoList
