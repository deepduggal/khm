import React, { Component } from 'react';
import '../styles/Landing.css';
import LandingImg from '../res/landing.jpeg';
import { Typography } from 'rmwc/Typography';

class Landing extends Component {
    render() {
        return (
            <section id="landing" className="landing">
                <div className="background" style={{ backgroundImage: 'url(' + LandingImg + ')'}}/>
                <div className="middle">
                    <span className="itemNumber">KHM</span>
                </div>
                <div className="foreground">
                    <Typography use="display4" className="landingText">Don't you deserve your dream home?</Typography>
                </div>
            </section>
        );
    }
}

export default Landing;
