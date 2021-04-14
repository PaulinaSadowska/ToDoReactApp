import { react } from "babel-types";
import React from "react";

export default class AddNewTask extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim()
        if(task){
            this.props.onTaskAdded(task)
            e.target.elements.task.value = ""
        } else {
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input 
                    type="text" 
                    name="task"
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}