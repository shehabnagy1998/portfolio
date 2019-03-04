import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCode, faComments, faGamepad, faFilm, faPlane } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'

export default class Interests extends Component {

    state = {
        interests: [
            faCode,
            faMusic,
            faComments,
            faGamepad,
            faFilm,
            faPlane
        ]
    };

    render() {
        return (
            <article className="interests" id='interests'>
                <h1>interests</h1>
                <Row className="w-100">
                    {this.state.interests.map((interest, index) => {
                        return (
                            <Col key={index} xs={6}>
                                <button className='wow rotateIn'><FontAwesomeIcon icon={interest} /></button>
                            </Col>
                        )
                    })}
                </Row>
            </article>
        )
    }
}
