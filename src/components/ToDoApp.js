import React from 'react';
import AddNewTask from './AddNewTask';
import { Header } from './Header';
import Tasks from './Tasks'

export default class ToDoApp extends React.Component {

    state = {
        tasks: []
    }

    componentDidMount = () => {
        try {
            const saved = JSON.parse(localStorage.getItem("tasks"))
            if (saved) {
                this.setState(() => ({ tasks: saved }))
            }
        } catch (e) {
            console.log("error while restoring saved state x.x", e)
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.tasks.length != prevState.tasks.length) {
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
        }
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