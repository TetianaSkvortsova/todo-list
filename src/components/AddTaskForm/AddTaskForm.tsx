import React from 'react';
import './AddTaskForm.scss';

function AddTaskForm() {
    return (
        <div className='add-task-form'>
            <form className='add-task-form__form'>
                <label className='add-task-form__title'>Додати нове завдання</label>
                <div className='add-task-form__form-wrapper'>
                    <div className='add-task-form__input-fields'>
                        <input type='text' className='add-task-form__input' placeholder='Що потрібно зробити?'/>
                    </div>
                    <select name='task-type' id='tasks' className='add-task-form__task-type'>
                        <option value='private'>особисте</option>
                        <option value='study'>навчання</option>
                        <option value='work'>робота</option>
                        <option value='purchases'>покупки</option>
                    </select>
                    <button type='button' className='add-task-form__add-btn'>+ Додати</button>
                </div>
            </form>
        </div>
    );
}

export default AddTaskForm;