import './App.scss'
import Header from "./components/Header/Header.tsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import TaskToolbar from "./components/TaskToolbar/TaskToolbar.tsx";
import TaskList from "./components/TaskList/TaskList.tsx";

function App() {
    return (
        <main className='app'>
            <Header/>
            <div className='app__wrapper'>
                <section className='app__add-task-section'>
                    <AddTaskForm/>
                    <TaskToolbar/>
                </section>
                <TaskList/>
            </div>
        </main>
    )
}

export default App

