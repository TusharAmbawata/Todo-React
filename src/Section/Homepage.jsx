import React, { useState } from 'react'

const Homepage = ({todos,setTodos}) => {
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!title || !description)
        {
            alert("Please fill all fields");
            return;
        }

        const newTodo = {
      todo: `Todo-${todos.length + 1}`,
      tittle: title,
      description: description,
    };

    // Add todo to state
    setTodos([...todos, newTodo]);

    // Clear input fields
    setTitle("");
    setDescription("");
    };

    

    

    return (
        <div className='container'>
            <div className='m-2 p-2'>
                <h1 className='text-center'>Todo App</h1>
            </div>
            <div>
                <h2 className='mx-2'>Add Todo</h2>
                <form className='mx-2 py-2' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tittle</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Homepage
