import React from "react";

export default class Task extends React.Component{


    render() {
        return (
            <div>
                <input type="checkbox"/>
                {this.props.task}
            </div>
        )
    }

}