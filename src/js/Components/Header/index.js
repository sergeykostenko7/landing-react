import React, { Component } from 'react'

import logo from './../../../images/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <a className="company-brand" href="#">
                        <img src={logo} alt="S-Pro" />
                    </a>
                    <button className="btn-toggle" type="button" id="btn-toggle">
                        <span className="btn-toggle__icon"></span>
                    </button>
                    <nav className="header-collapse" id="header-collapse">
                        <ul className="header-nav">
                            <li className="header-nav__item">
                                <a className="header-nav__link" href="#">Item 1</a>
                            </li>
                            <li className="header-nav__item">
                                <a className="header-nav__link" href="#">Item 2</a>
                            </li>
                            <li className="header-nav__item">
                                <a className="header-nav__link" href="#">Item 3</a>
                            </li>
                            <li className="header-nav__item">
                                <a className="header-nav__link" href="#">Item 4</a>
                            </li>
                            <li className="header-nav__item">
                                <a className="header-nav__link" href="#">Item 5</a>
                            </li>
                        </ul>
                        <a className="btn btn--md btn--outline outline-violet header__btn">
                            Button text
                        </a>
                    </nav>
                </div>
                <div className="header__shape"></div>
            </header>
        )
    }
}
