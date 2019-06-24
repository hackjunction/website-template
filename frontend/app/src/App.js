import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import { updateStaticContent } from './redux/staticcontent/actions';
import * as ContentSelectors from './redux/staticcontent/selectors';

import Header from './components/Header';
import HeroImage from './components/HeroImage';
import HeroCTA from './components/HeroCTA';
import EditorTools from './components/EditorTools';
import BasicSection from './components/BasicSection';
import Markdown from './components/Markdown';

class App extends Component {
    async componentDidMount() {
        this.props.updateStaticContent();
    }

    render() {
        const { getText, getMedia } = this.props;
        return (
            <Router className="foooofoo">
                <div className="App">
                    <Header />
                    <main className="App--main">
                        <HeroImage image={getMedia('homePageHeaderImage')}>
                            <HeroCTA
                                image={getMedia('homePageHeroCtaLogo')}
                                subtitle={getText('homePageHeroCtaSubtitle')}
                                ctaText={getText('leevinJuttu')}
                                ctaLink={getText('homePageHeroCtaLink')}
                            />
                        </HeroImage>
                        <BasicSection
                            title="This is Junction."
                            subtitle="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
                        >
                            <Markdown source={getText('homePageIntroText')} />
                        </BasicSection>
                    </main>
                    <EditorTools />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state),
        getMedia: ContentSelectors.buildGetMedia(state)
    };
};

export default connect(
    mapStateToProps,
    { updateStaticContent }
)(App);
