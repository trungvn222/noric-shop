import React, { PureComponent } from 'react';
import './style.css';

class Account extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <a href="#">
                    My Account
                    <i className="fa fa-angle-down" />
                </a>
                <ul className="account_selection">
                    <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true" />Sign In</a></li>
                    <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true" />Register</a></li>
                </ul>
            </React.Fragment>
        );
    }
}


export default Account;