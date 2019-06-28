import React from "react"
import ToDoItem from "./ToDoItem";
import {toDoList} from "./ToDoList";


function MyToDo() {

    const toDoItemArray = toDoList.map(item => <ToDoItem key={item.id} toDoList={item}/>)
    console.log(toDoItemArray)

    return(
        <div className="todo-list">
            {toDoItemArray}

        </div>

    )
}

export default MyToDo