import React from "react";

export default class Task extends React.Component {

    render() {
        return (
            <div>
                <p>
                    <input type="checkbox" />
                    {this.props.task}
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