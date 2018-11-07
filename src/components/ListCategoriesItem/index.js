import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

class ListCategoriesItem extends PureComponent {
    onClick = (e) => {
        this.props.onChangeCategory(); 
    }
    render() {
        const { name, link, active } = this.props;
        
        return (
            <li className={ active ? 'active' : '' }><Link to={link} onClick={this.onClick} >{name}</Link></li>
        );
    }
}

export default ListCategoriesItem;