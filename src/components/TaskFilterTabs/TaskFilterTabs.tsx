import React, {useState} from 'react';
import './TaskFilterTabs.scss';
import {useAppSelector} from "../../store/hooks.ts";

function TaskFilterTabs() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');
    const todos = useAppSelector((state) => state.todos.items);

    return (
        <div className='task-filter-tabs'>
            <button
                type='button'
                className={`task-filter-tabs__btn ${activeFilter === 'all' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => setActiveFilter('all')}
            >Всі({todos.length})</button>
            <button
                type='button'
                className={`task-filter-tabs__btn ${activeFilter === 'active' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => setActiveFilter('active')}
            >Активні(1)</button>
            <button
                type='button'
                className={`task-filter-tabs__btn  ${activeFilter === 'completed' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => setActiveFilter('completed')}
            >Виконані(3)</button>
        </div>
    );
}

export default TaskFilterTabs;