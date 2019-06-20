import React from 'react';
import './style.scss';

import Image from '../Image';
import MediaField from '../MediaField';

const HeroImage = props => {
    return (
        <div className="HeroImage">
            <MediaField imageKey={props.imageKey}>
                {image => <Image className="HeroImage--img" image={image} />}
            </MediaField>
            <div className="HeroImage--content">{props.children}</div>
        </div>
    );
};

export default HeroImage;
