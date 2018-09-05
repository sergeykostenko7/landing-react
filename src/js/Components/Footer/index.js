import React, { Component } from 'react'

import logo from './../../../images/logo.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer"> 
                <div className="footer__top">
                    <div className="container container--flex">
                        <a className="company-brand footer__company-brand" href="#">
                            <img src={logo} alt="S-Pro" />
                        </a>
                        <ul className="footer-social">
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-telegram-plane" href="https://telegram.org/" target="_blank">
                                    Telegram
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-twitter" href="https://twitter.com/" target="_blank">
                                    Twitter
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-linkedin-in" href="https://www.linkedin.com/" target="_blank">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-facebook-f" href="https://www.facebook.com/" target="_blank">
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-medium-m" href="https://medium.com/" target="_blank">
                                    Medium
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-reddit-alien" href="https://www.reddit.com/" target="_blank">
                                    Reddit
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-btc" href="https://www.bitcoin.com/" target="_blank">
                                    Bitcoin
                                </a>
                            </li>
                            <li className="footer-social__item">
                                <a className="footer-social__link fab fa-github" href="https://github.com/" target="_blank">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                        <div></div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container container--flex">
                        <ul className="footer-nav">
                            <li className="footer-nav__item">
                                <a className="footer-nav__link" href="#">Privacy Policy</a>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__link" href="#">Terms &amp; Conditions</a>
                            </li>
                            <li className="footer-nav__item">
                                <a className="footer-nav__link" href="#">Tokensale Agreement</a>
                            </li>
                        </ul>
                        <p className="footer__copyright">
                            &copy; 2018 S-PRO - All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
