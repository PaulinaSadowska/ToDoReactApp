import React from "react";
import Task from "./Task";

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
                    />
                })}
            </div>
        )
    }

}