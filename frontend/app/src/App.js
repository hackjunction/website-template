import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateStaticContent } from './redux/staticcontent/actions';

import './App.scss';

import Header from './components/Header';
import HeroImage from './components/HeroImage';
import TextField from './components/TextField';
import HeroCTA from './components/HeroCTA';

class App extends Component {
    async componentDidMount() {
        this.props.updateStaticContent();
    }

    render() {
        return (
            <Router className="foooofoo">
                <div className="App">
                    <Header />
                    <main className="App--main">
                        <HeroImage imageKey="homePageHeaderImage">
                            <TextField textKey="homePageHeroCtaLink">
                                {ctaLink => (
                                    <HeroCTA
                                        image={{ url: require('./assets/logos/wordmark_white.png') }}
                                        subtitle={<TextField textKey="homePageHeroCtaSubtitle" />}
                                        ctaText={<TextField textKey="homePageHeroCtaText" />}
                                        ctaLink={ctaLink}
                                    />
                                )}
                            </TextField>
                        </HeroImage>
                        <h1>Moro!</h1>
                        <div>
                            <h1>
                                <TextField textKey="myKey" />
                            </h1>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    { updateStaticContent }
)(App);
