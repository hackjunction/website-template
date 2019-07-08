import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage/index';
import TwoColumnSection from '../../components/TwoColumnSection/index';
import SingleColumnSection from '../../components/SingleColumnSection/index';
import Divider from '../../components/Divider/index';
import Markdown from '../../components/Markdown/index';
import Image from '../../components/Image';
import GradientLink from '../../components/GradientLink';

const HomePage = ({ getText, getMedia }) => {
    return (
        <div className="HomePage">
            <HeroImage image={getMedia('homePageHeaderImage')}>
                <Image
                    className="HomePage--logo"
                    transformation={{ width: 600, height: 200 }}
                    image={getMedia('homePageHeroCtaLogo')}
                />
                <h2 className="HomePage--title">{getText('homePageHeroCtaSubtitle')}</h2>
                <GradientLink href="http://google.com" text="Apply now" />
                {/* <GradientLink href={props.ctaLink} text={props.ctaText} /> */}
                {/* <HeroCTA
                                image={getMedia('homePageHeroCtaLogo')}
                                subtitle={getText('homePageHeroCtaSubtitle')}
                                ctaText={getText('leevinJuttu')}
                                ctaLink={getText('homePageHeroCtaLink')}
                            /> */}
            </HeroImage>
            <TwoColumnSection
                title="This is Junction."
                subtitle="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            >
                <Markdown source={getText('homePageIntroText')} />
            </TwoColumnSection>
            <Divider size="lg" />
            <SingleColumnSection title="Our Partners" subtitle="Check out some of our partners from previous years">
                <Markdown source={getText('homePageIntroText')} />
            </SingleColumnSection>
            <Divider size="lg" />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state),
        getMedia: ContentSelectors.buildGetMedia(state)
    };
};

export default connect(mapStateToProps)(HomePage);
