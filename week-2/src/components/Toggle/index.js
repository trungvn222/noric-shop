import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css';

class Toggle extends PureComponent {
    render() {
        return (
            <div className="hamburger_container">
                <FontAwesomeIcon icon={faBars} />
            </div>
        );
    }
}

export default Toggle;