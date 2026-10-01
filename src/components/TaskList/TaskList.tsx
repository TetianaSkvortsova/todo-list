import './TaskList.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {selectValues} from "../AddTaskForm/AddTaskForm.tsx";
import {cancelEditing, startEditing, toggleTodo, updateTodo} from "../../store/todoSlice.ts";
import {useRef} from "react";

function TaskList() {
    const dispatch = useAppDispatch();
    const saveRef = useRef<HTMLInputElement>(null);

    const todos = useAppSelector((state) => state.todos.items);
    const filter = useAppSelector((state) => state.todos.filter);
    const editingTodoId = useAppSelector((state) => state.todos.editingTodoId);
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    if (todos.length === 0) {
        return (<p className='no-items'>Список завдань порожній. Додайте перше завдання!</p>)
    }

    if (filteredTodos.length === 0) {
        return <p className='no-items'>Список завдань порожній.</p>;
    }

    const handleEditing = (id: string) => {
        dispatch(startEditing(id));
    }

    const handleCancel = () => {
        dispatch(cancelEditing());
    }

    const handleComplete = (id: string) => {
        dispatch(toggleTodo(id));
    }

     const handleSave = (id: string) => {
        const editedText = saveRef.current?.value;
        if (editedText && editedText.trim()) {
            dispatch(updateTodo({id, text: editedText}));
        }
    }

    return (
        <div className='task-list'>
            {filteredTodos.map((todo) => (
                <div className={`task-list__item ${todo.completed ? 'task-list__checkbox-completed' : ''}`}
                     key={todo.id}>

                    {editingTodoId === todo.id ? (
                        <div className="task-list__edit-mode">
                            <input
                                type="text"
                                className="task-list__edit-input"
                                defaultValue={todo.text}
                                ref={saveRef}
                            />
                            <button
                                className="task-list__save-btn"
                                onClick={() => handleSave(todo.id)}
                                title="Зберегти">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="#047857" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-check w-4 h-4" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </button>
                            <button
                                className="task-list__cancel-btn"
                                title="Скасувати"
                                onClick={handleCancel}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="#be123c" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-x w-4 h-4" aria-hidden="true">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className='list__checkbox'>
                                <button className="task-list__checkbox-button" onClick={() => handleComplete(todo.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         stroke={todo.completed ? "#00a86b" : "#888888"}
                                         aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        {todo.completed && <path d="m9 12 2 2 4-4"></path>}
                                    </svg>
                                </button>
                            </div>
                            <div className='task-list__details'>
                                <div className='task-list__title'>
                                    <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
                                </div>
                                <div className='task-list__description'>
                                    <span className='task-list__category'>{selectValues[todo.type]}</span>
                                    <span className='task-list__date'>Today</span>
                                </div>
                            </div>
                            <div className='task-list__actions'>
                                <button
                                    className="task-list__edit"
                                    title="Редагувати"
                                    onClick={() => handleEditing(todo.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         aria-hidden="true">
                                        <path d="M12 20h9"></path>
                                        <path
                                            d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path>
                                    </svg>
                                </button>
                                <button
                                    className="task-list__delete"
                                    title="Видалити">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         aria-hidden="true">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </>

                    )}
                </div>
            ))}

        </div>
    );
}

export default TaskList;