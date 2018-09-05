import React, { Component } from 'react'

import logoRound from './../../../images/logo-round.svg'

export default class Timeline extends Component {
    render() {
        return (
            <section className="history text-center">
                <h2 className="section-heading section-heading__history">Roadmap</h2>
                <h3 className="section-subheading section-subheading__history">
                    <span className="highlighted highlighted--sm">Party</span>
                    jokes startling but <br/> unnecessary
                </h3>
        
                <div className="timeline">
                    <div className="timeline__step timeline__step--first timeline__step--completed">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S1 2018</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                                <li>Ut enim ad minim veniam</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                    <div className="timeline__step timeline__step--inverse timeline__step--current">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S2 2018</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                                <li>Ut enim ad minim veniam</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S3 2018</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step timeline__step--inverse">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S1 2019</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                                <li>Ut enim ad minim veniam</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step timeline__step">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S2 2019</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step timeline__step--inverse">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S3 2019</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                </li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step timeline__step">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>S4 2019</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator"></div>
                    </div>
                    <div className="timeline__step timeline__step--last">
                        <div className="timeline__content">
                            <h4 className="timeline__heading">
                                <span>2020</span>
                            </h4>
                            <ul className="timeline__description">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                            </ul>
                        </div>
                        <div className="timeline__indicator">
                            <img src={logoRound} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
