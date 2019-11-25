import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import { Link } from 'react-router-dom';


class NavMenu extends Component {
    render() {
        return (<Navbar color="light" light expand="md">
            <NavbarBrand href="/">Bookstore</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link to="/products">Products</Link>
                </NavItem>
            </Nav>
        </Navbar>);
    }
}

export default NavMenu;
