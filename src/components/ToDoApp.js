import React from 'react';
import AddNewTask from './AddNewTask';
import { Header } from './Header';
import Tasks from './Tasks'

export default class ToDoApp extends React.Component {

    state = {
        tasks: ["Do the dishes", "walk a dog", "pet a cat"]
    }


    render() {
        return (
            <div>
                <Header />
                <Tasks tasks={this.state.tasks} />
                <AddNewTask/>
            </div>
        )
    }
}