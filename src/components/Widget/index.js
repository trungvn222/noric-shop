import React, { PureComponent } from 'react';
import './style.css';

class Widget extends PureComponent {
    render() {
        return (
            <div className="sidebar_section">
                <div className="sidebar_title">
                    <h5>{this.props.title}</h5>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default Widget;