import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap'

export default class Skills extends Component {

    state = {
        skills: [
            {
                name: 'HTML5',
                percent: '100'
            },
            {
                name: 'CSS3',
                percent: '100'
            },
            {
                name: 'SASS',
                percent: '80'
            },
            {
                name: 'Javascript',
                percent: '80'
            },
            {
                name: 'React.js',
                percent: '80'
            },
            {
                name: 'Jquery',
                percent: '100'
            },
            {
                name: 'Reactstrap',
                percent: '100'
            },
            {
                name: 'Node.js',
                percent: '80'
            },
            {
                name: 'Mongo DB',
                percent: '70'
            },
            {
                name: 'Adobe photoshop',
                percent: '60'
            },
            {
                name: 'GIT',
                percent: '100'
            },
            {
                name: 'NPM',
                percent: '100'
            },
        ]
    }

    render() {
        return (
            <article className="skills" id="skills">
                <h1>skills</h1>
                <Row className="w-100">
                    {
                        this.state.skills.map((skill, index) => {
                            return (
                                <Col md={6} key={index}>
                                    <label>{skill.name}</label>
                                    <Progress className='wow bounceInUp' animated value={skill.percent}>{`${skill.percent}%`}</Progress>
                                </Col>
                            )
                        })
                    }
                </Row>

            </article>
        )
    }
}
