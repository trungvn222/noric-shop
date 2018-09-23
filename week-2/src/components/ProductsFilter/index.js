import React, { PureComponent } from 'react';
import ProductsFilterItem from '../ProductsFilterItem';
import './style.css';

class ProductsFilter extends PureComponent {
    render() {
        const {categories} = this.props;
        if(!categories){
            return null;
        }
        return (
                <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <ProductsFilterItem key='all' name='All' active={true} />
                    {
                        categories.map( c => <ProductsFilterItem key={c.id} {...c} active={false} /> )
                    }
                </ul>
            </div>
        );
    }
}


export default ProductsFilter;