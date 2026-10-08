import React from 'react';
import './Header.scss';
import {useAppSelector} from "../../store/hooks.ts";

function Header() {
    const todos = useAppSelector((state) => state.todos.items);
    const completedCount = todos.filter((todo) => todo.completed).length;
    const progress: number = Math.round((completedCount / todos.length) * 100) || 0;

    return (
        <header className='app-header'>
            <div className='app-header__wrapper'>
                <div className='app-header__main'>
                    <div className='app-header__brand'>
                        <span className='app-header__badge-logo'>
                            <svg className='app-header__logo-icon'
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 aria-hidden="true">
                                <rect x="3" y="5" width="6" height="6" rx="1"></rect>
                                <path d="m3 17 2 2 4-4"></path>
                                <path d="M13 6h8"></path>
                                <path d="M13 12h8"></path>
                                <path d="M13 18h8"></path>
                                </svg>
                        </span>
                        <span className='app-header__name'>Мій планувальник</span>
                    </div>
                    <h1 className='app-header__title'>Список завдань</h1>
                    <p className='app-header__subtitle'>Організовуй свої ідеї та щоденні таски</p>
                </div>
                <div className='app-header__progress'>
                    <h1>{progress}%</h1>
                    <p className='app-header__text'>прогрес</p>
                </div>
            </div>
            <div className='app-header__progress-bar'>
                <div className='app-header__progress-bar-fill' style={{width: `${progress}%`}}></div>
            </div>
        </header>
    );
}

export default Header;