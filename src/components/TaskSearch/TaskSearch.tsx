import React, {useEffect, useState} from 'react';
import './TaskSearch.scss';
import {useAppDispatch} from "../../store/hooks.ts";
import {setSearchQuery} from "../../store/todoSlice.ts";

function TaskSearch() {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch(setSearchQuery(searchTerm));
        }, 400);

        return () => clearTimeout(handler);
    }, [searchTerm, dispatch]);

    return (
        <search className='task-search'>
            <svg className='task-search__search-icon'
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
                type="search"
                className="task-search__input"
                placeholder="Пошук..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </search>
    );
}

export default TaskSearch;