import { react } from "babel-types";
import React from "react";

export default class AddNewTask extends React.Component {

    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
        )
    }
}