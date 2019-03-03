import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap'

export default class Skills extends Component {
    render() {
        return (
            <article className="skills" id="skills">
                <h1>skills</h1>
                <Row className="w-100">
                    <Col md={6}>
                        <label>HTML5</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>CSS3</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>SASS</label>
                        <Progress animated value='80'>80%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Javascript</label>
                        <Progress animated value='80'>80%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>React js</label>
                        <Progress animated value='80'>80%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Jquery</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Reactstrap</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Node js</label>
                        <Progress animated value='80'>80%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Mongo DB</label>
                        <Progress animated value='70'>70%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>Adobe photoshop</label>
                        <Progress animated value='60'>60%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>GIT</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                    <Col md={6}>
                        <label>NPM</label>
                        <Progress animated value='100'>100%</Progress>
                    </Col>
                </Row>

            </article>
        )
    }
}
