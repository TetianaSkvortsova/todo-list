import React from 'react';
import './TaskList.scss';
import {useAppSelector} from "../../store/hooks.ts";
import {selectValues} from "../AddTaskForm/AddTaskForm.tsx";

function TaskList() {
    const todos = useAppSelector((state) => state.todos.items);

    if(todos.length === 0) {
        return (<p className='no-items'>Список завдань порожній. Додайте перше завдання!</p>)
    }
    return (
        <div className='task-list'>
            {todos.map((todo) => (
                <div className='task-list__item' key={todo.id}>
                    <div className='task-list__checkbox'>
                        <button className="task-list__checkbox-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </button>
                    </div>
                    <div className='task-list__details'>
                        <div className='task-list__title'>
                            <span>{todo.text}</span>
                        </div>
                        <div className='task-list__description'>
                            <span className='task-list__category'>{selectValues[todo.type]}</span>
                            <span className='task-list__date'>Today</span>
                        </div>
                    </div>
                    <div className='task-list__actions'>
                        <button
                            className="task-list__edit"
                            title="Редагувати">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 aria-hidden="true">
                                <path d="M12 20h9"></path>
                                <path
                                    d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path>
                            </svg>
                        </button>
                        <button
                            className="task-list__delete"
                            title="Видалити">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 aria-hidden="true">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default TaskList;