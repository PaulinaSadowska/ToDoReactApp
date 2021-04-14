import React from "react";

export default class Task extends React.Component {

    render() {
        return (
            <div>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.task.checked}
                        onChange={() => this.props.onTaskStatusChanged(this.props.task)}
                    />
                    {this.props.task.name}
                    <button
                        onClick={() => { this.props.onTaskRemoved(this.props.task) }}
                    >
                        Remove
                    </button>
                </p>
            </div>
        )
    }

}