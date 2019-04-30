import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaFacebookSquare } from 'react-icons/fa'

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">My SpringBoot & React Demo</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/kzielinski96">
                                    <FaGithubSquare size="30" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://facebook.com">
                                <FaFacebookSquare size="30" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}