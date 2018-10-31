import React, { PureComponent } from 'react';
import './style.css';

class QuickCategory extends PureComponent {
    render() {
        const {thumbnail, name, link} = this.props;
        const style = {
            backgroundImage : `url(${thumbnail})`
        };
        return (
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={style}>
                    <div className="banner_category">
                        <a href={link}>{name}</a>
                    </div>
                </div>
            </div>
        );
    }
}



export default QuickCategory;