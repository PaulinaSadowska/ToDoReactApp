import React from "react";

export default class Task extends React.Component {


    render() {
        return (
            <div>
                <p>
                    <input type="checkbox" />
                    {this.props.task}
                    <button>Remove</button>
                </p>
            </div>
        )
    }

}