import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <section className="jumbotron">
                <div className="jumbotron__image">
                    <div className="container">
                        <div className="jumbotron__caption">
                            <h1 className="page-heading">
                                <span className="highlighted">Virginia</span> travel for kids
                            </h1>
                            <div className="jumbotron__actions">
                                <a className="btn btn--md btn--default jumbotron__btn">
                                    <i className="fas fa-cloud-download-alt"></i>&nbsp;
                                    Button text
                                </a>
                                <a className="btn btn--lg btn--outline outline-white jumbotron__btn">
                                    <i className="fas fa-cloud-download-alt"></i>&nbsp;
                                    Button text
                                </a>
                                <a className="btn btn--md btn--outline outline-white jumbotron__btn">
                                    <i className="far fa-play-circle"></i>&nbsp;
                                    Button text
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="timer__caption">
                        <h5 className="timer__heading">Title block</h5>
                        <ul className="timer__countdown">
                            <li className="timer__slot">
                                <div className="timer__label">Days</div>
                                <div className="timer__value opacity-0" id="days"></div>
                            </li>
                            <li className="timer__slot">
                                <div className="timer__label">Hours</div>
                                <div className="timer__value opacity-1" id="hours"></div>
                            </li>
                            <li className="timer__slot">
                                <div className="timer__label">Minutes</div>
                                <div className="timer__value opacity-2" id="minutes"></div>
                            </li>
                            <li className="timer__slot">
                                <div className="timer__label">Seconds</div>
                                <div className="timer__value opacity-3" id="seconds"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
