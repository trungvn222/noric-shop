import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductsFilterItem extends PureComponent {
    render() {
        const {name, active} = this.props;

        const classes = `grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${ active ? 'active':'' }`;
        return (
            <li className={classes} >{name}</li>
        );
    }
}

export default ProductsFilterItem;