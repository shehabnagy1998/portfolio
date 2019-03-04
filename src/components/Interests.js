import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCode, faComments, faGamepad, faFilm, faPlane } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'

export default class Interests extends Component {
    render() {
        return (
            <article className="interests" id='interests'>
                <h1>interests</h1>
                <Row className="w-100">
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faCode} /></button>
                    </Col>
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faMusic} /></button>
                    </Col>
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faComments} /></button>
                    </Col>
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faGamepad} /></button>
                    </Col>
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faFilm} /></button>
                    </Col>
                    <Col xs={6}>
                        <button><FontAwesomeIcon icon={faPlane} /></button>
                    </Col>
                </Row>
            </article>
        )
    }
}
