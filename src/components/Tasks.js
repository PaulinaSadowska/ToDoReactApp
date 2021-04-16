import React from "react";
import Task from "./Task";

export default class Tasks extends React.Component {

    renderTasks = () => {
        return this.props.tasks
            .map((task, key) => {
                if (!this.props.showCompleted || !task.completed) {
                    return <Task
                        key={key}
                        task={task}
                        onTaskRemoved={this.props.onTaskRemoved}
                        onTaskStatusChanged={this.props.onTaskStatusChanged}
                    />
                }
            })
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.onToggleShowCompleted}
                    className='button--link button'
                >
                    {(this.props.showCompleted) ? "Show completed" : "Hide completed"}
                </button>
                {this.renderTasks()}
            </div>
        )
    }

}