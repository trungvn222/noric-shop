import React, { PureComponent } from 'react';
import Cart  from '../Cart';
import Toggle from '../Toggle';
import './style.css';

class Navigation extends PureComponent {
    render() {
        const { cart } = this.props;
        return (
            <nav className="navbar">
                <ul className="navbar_menu">
                    <li><a href="#">home</a></li>
                    <li><a href="categories.html">shop</a></li>
                    <li><a href="#">promotion</a></li>
                    <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
                <ul className="navbar_user">
                    <li className="checkout">
                    <Cart {...cart} />
                    </li>
                </ul>
                <Toggle />
            </nav>
        );
    }
}



export default Navigation;