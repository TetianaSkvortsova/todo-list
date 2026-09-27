import React from 'react';
import TaskFilterTabs from "../TaskFilterTabs/TaskFilterTabs.tsx";
import './TaskToolbar.scss';
import TaskSearch from "../TaskSearch/TaskSearch.tsx";

function TaskToolbar() {
    return (
        <div className='task-toolbar'>
            <TaskFilterTabs />
            <TaskSearch />
        </div>
    );
}

export default TaskToolbar;