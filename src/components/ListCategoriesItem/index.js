import React, { PureComponent } from 'react';

class ListCategoriesItem extends PureComponent {

    onClick(e){
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        const { name } = this.props;
        return (
            <li><a href="#" onClick={ this.onClick.bind(this) }>{name}</a></li>
        );
    }
}

export default ListCategoriesItem;