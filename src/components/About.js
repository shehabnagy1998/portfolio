import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import * as $ from 'jquery'

export default class About extends Component {

    componentDidMount() {
        let height = $('.about-second').offset().top;
        $(document).on('scroll', function (e) {
            if ($(document).scrollTop() >= height) {
                $('.top-navbar').addClass('active');
            } else {
                $('.top-navbar').removeClass('active');
            }
            console.log($(document).scrollTop());
        })
    }

    render() {
        return (
            <article className="about" id="about">
                <section className="about-first">
                    <h1 className='wow slideInRight'>shehab <span>nagy</span></h1>
                    <span className="address">cairo, egypt &middot; </span>
                    <span className="phone">+201064264908 &middot; </span>
                    <a href="mailto:shehab.nagy1998@gmail.com" className="email">shehab.nagy1998@gmail.com</a>
                </section>
                <section className="about-second wow lightSpeedIn">
                    <p>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                </section>
                <section className="about-third">
                    <a target='_blank' href='https://github.com/shehabnagy1998'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a target='_blank' href='https://fb.com//shehabnagy1998'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a target='_blank' href='https://linkedin.com/in/shehabnagy1998'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </section>
            </article>
        )
    }
}
