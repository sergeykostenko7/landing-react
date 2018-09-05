import React, { Component } from 'react'

import './../scss/main.scss'

import Header from './Components/Header'
import Jumbotron from './Components/Jumbotron'
import Slider from './Components/Slider'
import Timeline from './Components/Timeline'
import Footer from './Components/Footer'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
                <Slider />
                <Timeline />
                <Footer />
            </div>
        )
    }
}
