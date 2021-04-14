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

    handleTaskRemoved = (taskToRemove) => {
        this.setState((prev) => {
            return {
                tasks: prev.tasks.filter((task) => task != taskToRemove)
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Tasks
                    tasks={this.state.tasks}
                    onTaskRemoved={this.handleTaskRemoved}
                />
                <AddNewTask
                    onTaskAdded={this.handleAddTask}
                />
            </div>
        )
    }
}