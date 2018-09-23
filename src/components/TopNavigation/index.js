import React, { PureComponent } from 'react';
import Languages from '../Languages';
import Account from '../Account';
import './style.css';

class TopNavigation extends PureComponent {
    render() {
        const { languages, text } = this.props;
        return (
            <div className="top_nav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top_nav_left">{text}</div>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="top_nav_right">
                                <ul className="top_nav_menu">
                                    {/* Currency / Language / My Account */}
                                    <li className="language">
                                        <Languages languages={languages} />
                                    </li>
                                    <li className="account">
                                        <Account />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TopNavigation;