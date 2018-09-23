import React, { PureComponent } from 'react';
import Account from '../Account';
import Languages from '../Languages';
import './style.css';

class Hamburger extends PureComponent {
    render() {
        const {languages} = this.props;
        return (
            <React.Fragment>
                <div className="fs_menu_overlay"></div>
                <div className="hamburger_menu">
                    <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true" /></div>
                    <div className="hamburger_menu_content text-right">
                        <ul className="menu_top_nav">
                            <li className="menu_item has-children">
                                <a href="#">
                                usd
                                <i className="fa fa-angle-down" />
                                </a>
                                <ul className="menu_selection">
                                <li><a href="#">cad</a></li>
                                <li><a href="#">aud</a></li>
                                <li><a href="#">eur</a></li>
                                <li><a href="#">gbp</a></li>
                                </ul>
                            </li>
                            <li className="menu_item has-children">
                                <Languages languages={languages} />
                            </li>
                            <li className="menu_item has-children">
                                <Account />
                            </li>
                            <li className="menu_item"><a href="#">home</a></li>
                            <li className="menu_item"><a href="categories.html">shop</a></li>
                            <li className="menu_item"><a href="#">promotion</a></li>
                            <li className="menu_item"><a href="#">pages</a></li>
                            <li className="menu_item"><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                            <li className="menu_item"><a href="#">contact</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Hamburger;