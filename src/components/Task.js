import React from "react";

export default class Task extends React.Component {

    render() {
        return (
            <div
                className='task'
            >
                <div
                    className='task__innercontainer'
                >
                    <input
                        type="checkbox"
                        className='regular-checkbox'
                        checked={this.props.task.completed}
                        onChange={() => this.props.onTaskStatusChanged(this.props.task)}
                    />
                    <p
                        className='task__text'
                    >{this.props.task.name}</p>
                </div>
                <button
                    className='button--red button'
                    onClick={() => { this.props.onTaskRemoved(this.props.task) }}
                >
                    Remove
                </button>
            </div>
        )
    }

}