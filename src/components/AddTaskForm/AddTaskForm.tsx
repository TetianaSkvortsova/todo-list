import React, {useRef} from 'react';
import './AddTaskForm.scss';
import {useAppDispatch} from "../../store/hooks.ts";
import {addTodo} from "../../store/todoSlice.ts";

export const selectValues = {
    private: 'особисте',
    study: 'навчання',
    work: 'робота',
    purchases: 'покупки',
}

function AddTaskForm() {
    const dispatch = useAppDispatch();
    const taskRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask = taskRef.current?.value;
        const selectedValue = selectRef.current?.value || 'private';
        const createdAt = new Date().toLocaleDateString('uk-UA');

        if (newTask && newTask.trim()) {
            dispatch(addTodo({
                text: newTask,
                type: selectedValue,
                createdAt,
                completed: false,
            }));

            if (taskRef.current) {
                taskRef.current.value = '';
            }
        }
    }

    return (
        <div className='add-task-form'>
            <form className='add-task-form__form' onSubmit={handleAddTask}>
                <label className='add-task-form__title'>Додати нове завдання</label>
                <div className='add-task-form__form-wrapper'>
                    <div className='add-task-form__input-fields'>
                        <input type='text' className='add-task-form__input' placeholder='Що потрібно зробити?'
                               ref={taskRef}/>
                    </div>
                    <select
                        ref={selectRef}
                        defaultValue='private'
                        name='task-type'
                        className='add-task-form__task-type'
                    >
                        <option value='private'>{selectValues.private}</option>
                        <option value='study'>{selectValues.study}</option>
                        <option value='work'>{selectValues.work}</option>
                        <option value='purchases'>{selectValues.purchases}</option>
                    </select>
                    <button type='submit' className='add-task-form__add-btn'>+ Додати</button>
                </div>
            </form>
        </div>
    );
}

export default AddTaskForm;