import React, {useEffect, useState} from 'react';
import './TaskSearch.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </search>
    );
}

export default TaskSearch;