import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';


class PaginationItem extends PureComponent {
    onClick(e){
        this.props.onClick();
    }
    render() {
        const { page, baseUrl } = this.props;
        
        return (
            <li>
                <Link to={`${baseUrl}/page/${page}`} onClick={ this.onClick.bind(this) }>{page}</Link>
            </li>
        );
    }
}


export default PaginationItem;