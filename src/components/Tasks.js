import React from "react";
import Task from "./Task";
import Task2 from "./Task";

export default class Tasks extends React.Component {

    render() {
        return (
            <div>
                <button>Show completed</button>
                {this.props.tasks.map((element, key) => {
                    return <Task
                        key={key}
                        task={element}
                        onTaskRemoved={this.props.onTaskRemoved}
                        onTaskStatusChanged={this.props.onTaskStatusChanged}
                    />
                })}
            </div>
        )
    }

}