import React from "react";
import Task from "./Task";

export default class Tasks extends React.Component {

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