import React from 'react';
import AddNewTask from './AddNewTask';
import { Header } from './Header';
import Tasks from './Tasks'

export default class ToDoApp extends React.Component {

    state = {
        tasks: [
            { name: "pet a cat", checked: false },
            { name: "eat dinner", checked: true }
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
        const newTask = { name: task, checked: false }
        this.setState((prev) => ({
            tasks: [...prev.tasks, newTask]
        }));
    }

    handleTaskRemoved = (taskToRemove) => {
        this.setState((prev) => ({
            tasks: prev.tasks.filter((task) => task != taskToRemove)
        }));
    }

    handleTaskStatusChanged = (taskToChange) => {
        this.setState((prev) => {
            const changedIndex = prev.tasks.indexOf(taskToChange)
            prev.tasks[changedIndex].checked = !taskToChange.checked
            console.log(prev.tasks)
            return {
                tasks: prev.tasks
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
                    onTaskStatusChanged={this.handleTaskStatusChanged}
                />
                <AddNewTask
                    onTaskAdded={this.handleAddTask}
                />
            </div>
        )
    }
}