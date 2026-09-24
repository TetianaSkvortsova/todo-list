import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className='app-header'>
            <div className='app-header__wrapper'>
                <div className='app-header__main'>
                    <div className='app-header__brand'>
                        <span className='app-header__badge-logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" aria-hidden="true"><rect
                                x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path
                                d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path>
                                </svg>
                        </span>
                        <span className='app-header__name'>Мій планувальник</span>
                    </div>
                    <h1 className='app-header__title'>Список завдань</h1>
                    <p className='app-header__subtitle'>Організовуй свої ідеї та щоденні таски</p>
                </div>
                <div className='app-header__progress'>
                    <h1>33%</h1>
                    <p className='app-header__text'>прогрес</p>
                </div>
            </div>
            <div className='app-header__progress-bar'>
                <div className='app-header__progress-bar-fill' style={{ width: `${33}%` }}></div>
            </div>
        </header>
    );
}

export default Header;