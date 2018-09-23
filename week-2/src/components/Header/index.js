import React, { PureComponent } from 'react';
import TopNavigation from '../TopNavigation';
import Navigation from '../Navigation';
import Logo from '../Logo';
import './style.css';

class Header extends PureComponent {
    render() {
        const { languages, topText, cart } = this.props;
        return (
            <header className="header trans_300">
                <TopNavigation languages={languages} text={topText}/>
                <div className="main_nav_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-right">
                                <Logo />
                                <Navigation cart={cart}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;