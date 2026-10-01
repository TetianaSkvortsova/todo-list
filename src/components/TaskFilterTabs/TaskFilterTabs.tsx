import React, {useState} from 'react';
import './TaskFilterTabs.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {type FilterType, setFilter} from "../../store/todoSlice.ts";

function TaskFilterTabs() {
    const dispatch = useAppDispatch();
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');
    const todos = useAppSelector((state) => state.todos.items);
    const currentFilter = useAppSelector((state) => state.todos.filter);

    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
        dispatch(setFilter(filter));
    };

    const activeCount = todos.filter((todo) => !todo.completed).length;
    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
        <div className='task-filter-tabs'>
            <button
                type='button'
                className={`task-filter-tabs__btn ${activeFilter === 'all' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => handleFilterChange('all')}
            >Всі({todos.length})
            </button>
            <button
                type='button'
                className={`task-filter-tabs__btn ${activeFilter === 'active' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => handleFilterChange('active')}
            >Активні({activeCount})
            </button>
            <button
                type='button'
                className={`task-filter-tabs__btn  ${activeFilter === 'completed' ? 'task-filter-tabs__btn--active' : ''}`}
                onClick={() => handleFilterChange('completed')}
            >Виконані({completedCount})
            </button>
        </div>
    );
}

export default TaskFilterTabs;