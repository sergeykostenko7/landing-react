import React, { Component } from 'react'

import Slide from './../Slide'

export default class Slider extends Component {
    render() {
        return (
            <section className="slider">
                <div className="slider__main">
                    <div className="slick-slider">
                        <Slide />
                        <Slide />
                        <Slide />
                    </div>
                    <div className="slick-buttons"></div>
                </div>
                <div className="slider__aside"></div>
            </section>
        )
    }
}
