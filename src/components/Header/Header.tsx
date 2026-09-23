import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="container">
            <div className='content-wrapper'>
                <div className='content'>
                    <div className='logo-wrapper'>
                        <span className='logo badge'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" aria-hidden="true"><rect
                                x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path
                                d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path>
                                </svg>
                        </span>
                        <span className='name text-muted'>Мій планувальник</span>
                    </div>
                    <h1 className='title'>Список завдань</h1>
                    <p className='subtitle'>Організовуй свої ідеї та щоденні таски</p>
                </div>
                <div className='progress badge'>
                    <h1>33%</h1>
                    <p className='text-muted'>прогрес</p>
                </div>
            </div>
            <div className='progress-bar'>
                <div className='progress-bar__fill' style={{ width: `${33}%` }}></div>
            </div>
        </div>
    );
}

export default Header;