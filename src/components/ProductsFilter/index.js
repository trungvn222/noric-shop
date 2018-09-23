import React, { PureComponent } from 'react';
import ProductsFilterItem from '../ProductsFilterItem';
import './style.css';

class ProductsFilter extends PureComponent {

    

    render() {
        const {categories, onFilterProducts, selectedCategory} = this.props;
        if(!categories){
            return null;
        }
        return (
                <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <ProductsFilterItem key='all' name='All' onClick={ () => onFilterProducts(0) } active={ 0 === selectedCategory } />
                    {
                        categories.map( c => <ProductsFilterItem onClick={ () => onFilterProducts(c.id) } key={c.id} {...c} active={ c.id === selectedCategory } /> )
                    }
                </ul>
            </div>
        );
    }
}


export default ProductsFilter;