import React, {useState} from 'react';


const Form = () => {
    const [task, setTask] = useState({
        description : "",
        complete : false
    })

    let [listOfTasks, setListOfTasks] = useState([

    ])

    const changeHandler = (e) => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setListOfTasks([...listOfTasks, task])
        setTask({
            description : "",
            complete : false
        })
    }

    const completeTask = (e, idx) =>{
        let [...appendedList] = listOfTasks
        appendedList[idx].complete = !appendedList[idx].complete

        setListOfTasks(appendedList)
    }

    const deleteTask = (e, idx) =>{
        let appendedList = listOfTasks.filter((task, i)=>{
            return i !=idx
        })
        setListOfTasks(appendedList)
    }


    return (
        <div className="container">
            <h1>To do List</h1>
            <form onSubmit = {submitHandler} >
                <div className="form-group">
                    <label htmlFor="">Task</label>
                    <input onChange={changeHandler} type="text" name="description" id="" value={task.description} className="form-control"/>
                    {
                        task.description.length > 0 && task.description.length < 3?
                        <p className = "text-danger">Please type in a task</p>:null
                    }
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>

            <br /><div>
                <h3>Current List of Tasks</h3>
                    {
                        listOfTasks.map((task, i)=>{
                            return (
                                <div key={i}>
                                    <p style={{textDecoration: task.complete?"line-through": "none"}}>{task.description}   <input onClick={(e)=>completeTask(e, i)} type="checkbox" name="" id=""/>
                                    </p>
                                    <button onClick={(e)=>deleteTask(e, i)}>Delete</button>
                                    <br /><br /><br />
                                </div>
                            )
                        })
                    }

            </div>
        </div>
    );
};


export default Form;