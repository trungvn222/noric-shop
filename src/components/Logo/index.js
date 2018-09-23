import React, { PureComponent } from 'react';
import './style.css';

class Logo extends PureComponent {
    render() {
        return (
            <div className="logo_container">
				<a href="#">Nordic<span>Shop</span></a>
			</div>
        );
    }
}

export default Logo;