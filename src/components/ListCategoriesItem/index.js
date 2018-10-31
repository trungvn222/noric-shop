import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

class ListCategoriesItem extends PureComponent {
    onClick = (e) => {
        
        this.props.onChangeCategory(); 
    }
    render() {
        const { name, link, onChangeCategory } = this.props;
        
        return (
            <li><Link to={link} onClick={this.onClick} >{name}</Link></li>
        );
    }
}

export default ListCategoriesItem;