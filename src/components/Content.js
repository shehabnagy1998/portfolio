import React, { Component } from 'react'
import TopNavbar from './TopNavbar';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Copyright from './Copyright';
// import * as $ from 'jquery'
// import 'bootstrap';

export default class Content extends Component {
    render() {
        return (
            <article className="main-content" >
                <TopNavbar />
                <About />
                <Education />
                <Skills />
                <Interests />
                <Copyright />
            </article>
        )
    }
}
