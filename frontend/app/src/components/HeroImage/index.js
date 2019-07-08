import React from 'react';
import './style.scss';

import Image from '../Image';

const HeroImage = ({ image, children }) => {
    return (
        <div className="HeroImage">
            <Image image={image} className="HeroImage--img" />
            <div className="HeroImage--content">{children}</div>
        </div>
    );
};

export default HeroImage;
