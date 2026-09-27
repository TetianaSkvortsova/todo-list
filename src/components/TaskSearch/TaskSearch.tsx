import React from 'react';
import './TaskSearch.scss';

function TaskSearch() {
    return (
        <search className='task-search'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
                type="search"
                className="task-search__input"
                placeholder="Пошук..."
            />
        </search>
    );
}

export default TaskSearch;