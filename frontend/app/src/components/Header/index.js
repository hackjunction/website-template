import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <div className="Header">
            <img
                className="Header--logo"
                src={require('../../assets/logos/wordmark_white.png')}
                alt="Junction wordmark"
            />
            <div className="Header--content" />
            <img
                className="Header--emblem"
                src={require('../../assets/logos/emblem_white.png')}
                alt="Junction emblem"
            />
        </div>
    );
};

export default Header;
