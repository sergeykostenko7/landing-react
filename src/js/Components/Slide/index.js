import React, { Component } from 'react'

import slide from './../../../images/slide.jpg'
import logoRound from './../../../images/logo-round.svg'

export default class Slide extends Component {
    render() {
        return (
            <div className="slide">
                <img className="slide__image" src={slide} alt="Roy Rivera" />
                <div className="slide__caption">
                    <p className="slide__blockquote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="slide__credits">
                        <div className="slide__icon">
                            <img src={logoRound} alt="" />
                        </div>
                        <div className="slide__author">
                            <h6 className="slide__author-name">Roy Rivera</h6>
                            <p className="slide__author-info">
                                FrontEnd Developer<br/>
                                S-PRO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
