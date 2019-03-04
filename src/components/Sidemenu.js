import React from 'react'
import './styles.scss'
import profile from '../assets/profile.jpg'
import {
    ListGroup, ListGroupItem
} from 'reactstrap'

const Sidemenu = () => {
    return (
        <aside className="sidemenu d-none d-lg-flex">
            <section className="profile-img">
                <img src={profile} alt="profile" />
            </section>
            <ListGroup className="sections-list" id='menu'>
                <ListGroupItem tag='a' href="#about" active action>about</ListGroupItem>
                <ListGroupItem tag='a' href="#education" action>education</ListGroupItem>
                <ListGroupItem tag='a' href="#skills" action>skills</ListGroupItem>
                <ListGroupItem tag='a' href="#interests" action>interests</ListGroupItem>
            </ListGroup>
        </aside >
    )
}

export default Sidemenu
