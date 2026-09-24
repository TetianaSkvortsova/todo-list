import {useState} from 'react'
import './App.scss'
import Header from "./components/Header/Header.tsx";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <main className='app'>
            <Header/>
            <div className='app__wrapper'>
                <section className='app__add-task-section'>
                    <AddTaskForm />
                </section>
            </div>
        </main>
    )
}

export default App

