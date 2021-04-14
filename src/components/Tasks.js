import React from "react";
import Task from "./Task";


export default class Tasks extends React.Component {

    // show finished button
    // tasks list

    getTasks = () => {
        return this.props.tasks.map((element, key) => (
            <Task
                key={key}
                task={element}
            />
        ));
    }

    render() {
        return (
            <div>
                <button>Show completed</button>
                {this.getTasks()}
            </div>
        )
    }

}