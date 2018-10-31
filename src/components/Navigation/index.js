import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import Cart  from '../Cart';
import Toggle from '../Toggle';
import './style.css';

class Navigation extends PureComponent {
    render() {
        const { cart } = this.props;
        return (
            <nav className="navbar">
                
                <ul className="navbar_menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/category'>Shop</Link></li>
                    <li><Link to='/promotion'>Promotion</Link></li>
                    <li><Link to='/blog'>blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
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