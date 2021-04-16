import { react } from "babel-types";
import React from "react";

export default class AddNewTask extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim()
        if (task) {
            this.props.onTaskAdded(task)
            e.target.elements.task.value = ""
        } else {
            console.log("error")
        }
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className='input__container'
            >
                <input
                    type="text"
                    name="task"
                    className="input"
                />
                <button
                    className='button--green button'
                >Add</button>
            </form>
        )
    }
}