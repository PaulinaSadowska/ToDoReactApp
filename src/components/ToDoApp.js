import React from 'react';
import AddNewTask from './AddNewTask';
import { Header } from './Header';
import Tasks from './Tasks'

export default class ToDoApp extends React.Component {

    state = {
        showCompleted: false,
        tasks: [
            {
                name: "pet a cat",
                completed: false
            },
            {
                name: "eat dinner",
                completed: true
            }
        ]
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
        const newTask = { name: task, completed: false }
        this.setState((prev) => ({
            tasks: [...prev.tasks, newTask]
        }));
    }

    handleTaskRemoved = (taskToRemove) => {
        this.setState((prev) => ({
            tasks: prev.tasks.filter((task) => task != taskToRemove)
        }));
    }

    // very ugly, fix me!
    handleTaskStatusChanged = (taskToChange) => {
        this.setState((prev) => {
            const changedIndex = prev.tasks.indexOf(taskToChange)
            prev.tasks[changedIndex].completed = !taskToChange.completed
            return {
                tasks: prev.tasks
            }
        });
    }

    handleToggleShowCompleted = () => {
        this.setState((prev) => ({
            showCompleted: !prev.showCompleted
        }));
    }

    render() {
        return (
            <div
                className='desk'
            >
                <Header />
                <Tasks
                    tasks={this.state.tasks}
                    onTaskRemoved={this.handleTaskRemoved}
                    onTaskStatusChanged={this.handleTaskStatusChanged}
                    onToggleShowCompleted={this.handleToggleShowCompleted}
                    showCompleted={this.state.showCompleted}
                />
                <AddNewTask
                    onTaskAdded={this.handleAddTask}
                />
            </div>
        )
    }
}