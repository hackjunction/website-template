import React from 'react';
import './style.scss';

const GradientLink = ({ text, href, color = '255,0,0' }) => {
    return (
        <a href={href} className="GradientLink" style={{ '--color': color }}>
            {text}
        </a>
    );
};

export default GradientLink;
