
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Task() {
  const baseURL = 'http://localhost:8080/tasks/';
  let {taskId} = useParams();
  console.log(taskId)
  let navigate = useNavigate(); 
  const [task, setTask] = useState();

  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  useEffect(() =>{
        const taskData = ()=>{
                const requestOptions = {
                        method: 'GET',
                        headers: {
                                 'Content-Type': 'application/json',
                                 'Access-Control-Allow-Origin' : '*',
                                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                 },
                       };
                fetch(baseURL+"getTask/"+taskId, requestOptions)
                .then(response => response.json()).then(json => {
                    console.log('myData is: ',json)
                    setTask(json)
                });
            } ;
        taskData()
  },[])
  function handleSubmit(e) {
                // Simple POST request with a JSON body using fetch
                const formData = new FormData(e.target);
                console.log("formData :"+formData)
                const id = e.target.id.value;
                const title = e.target.title.value;
                const description = e.target.description.value;
                const status = e.target.status.value;
        
                console.log(id+title+description+status)
                
                
                if(id == 0){
                const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: id, title: title,description: description, status: status})
                        };
                fetch(baseURL+"createTask", requestOptions)
                    .then(response => response.json());
                } else{
                const requestOptions = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: id, title: title,description: description, status: status})
                        };
                        fetch(baseURL+"updateTask", requestOptions)
                    .then(response => response.json());
                }                
                    routeChange();   
            }      
  return (
    <div>
         <div className='container'>
                <h2>New Task</h2>
                
                    <form onSubmit={handleSubmit}>
                    <div className='row'>
                                <input type="hidden" class="form-control" name="id" placeholder="" value={task.id}/>                           
                      
                        <div className='col-6'>
                                <label for="title">Title</label>
                                <input type="text" required="true" class="form-control" name="title" placeholder="Enter title here..." value={task.title}/>                            
                        </div>
                        <div className='col-6'>
                                <label for="description">Description</label>
                                <input type="text" required="true" class="form-control" name="description" placeholder="Enter description here..." value={task.description}/>                            
                        </div>
                        <div className='col-6'>
                                <label for="status" value={task.status}>Status</label>
                                <select name="status" class="form-control">
                                        <option value="To Do">To Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                 </select>                                   
                        </div>
                        <div className='col-6'>
                                <button type="submit" class="mt-4 btn btn-primary" >Submit</button>                           
                        </div>
                    </div>
                        
                    </form>
                
         </div>

    </div>
  )
}

export default Task;