import React, { PureComponent } from 'react';


class ProductsSortItem extends PureComponent {
    onSelected(e){
        e.preventDefault();
        this.props.onClick();
    }
    render() {
        const { name } = this.props;
        return (
            <li className="type_sorting_btn"><a onClick={ this.onSelected.bind(this) }>{name}</a></li>
        );
    }
}

export default ProductsSortItem;