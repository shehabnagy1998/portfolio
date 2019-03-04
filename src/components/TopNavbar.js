import React, { Component } from 'react'
import {
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse
} from 'reactstrap'

export default class TopNavbar extends Component {

    state = {
        isOpen: false
    };

    toggle = _ => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar dark className="d-lg-none top-navbar" id='menu'>
                <NavbarBrand href="/">shehab nagy</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='#about'>about</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#education'>education</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#skills'>skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#interests'>interests</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
