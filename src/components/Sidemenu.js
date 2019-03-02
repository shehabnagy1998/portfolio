import React from 'react'
import './styles.scss'
import profile from '../assets/profile.jpg'

const Sidemenu = () => {
    return (
        <aside className="sidemenu">
            <section className="profile-img">
                <img src={profile} alt="profile" />
            </section>
            <ul className="sections-list">
                <li><a href="#about">about</a></li>
                <li><a href="#education">education</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#interests">interests</a></li>
            </ul>
        </aside>
    )
}

export default Sidemenu
