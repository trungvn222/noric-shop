import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductsFilterItem extends PureComponent {
    clickHandle(e){
        e.preventDefault();
        this.props.onClick();
    }
    render() {
        const {name, active} = this.props;

        const classes = `grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${ active ? 'active':'' }`;
        return (
            <li className={classes}>
                <a onClick={ this.clickHandle.bind(this) }>{name}</a>
                
            </li>
        );
    }
}

export default ProductsFilterItem;