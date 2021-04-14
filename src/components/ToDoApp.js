import React from 'react';
import AddNewTask from './AddNewTask';
import { Header } from './Header';
import Tasks from './Tasks'

export default class ToDoApp extends React.Component {

    state = {
        tasks: ["Do the dishes", "walk a dog", "pet a cat"]
    }

    handleAddTask = (task) => {
        this.setState((prev) => ({
            tasks: [...prev.tasks, task]
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <Tasks tasks={this.state.tasks} />
                <AddNewTask
                    onTaskAdded={this.handleAddTask}
                />
            </div>
        )
    }
}