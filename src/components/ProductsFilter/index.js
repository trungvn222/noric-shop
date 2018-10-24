import React, { PureComponent } from 'react';
import ProductsFilterItem from '../ProductsFilterItem';
import './style.css';

import {connect} from 'react-redux';
import { fetchCategory, fetchProductsByCategory } from '../../actions/products';

class ProductsFilter extends PureComponent {

    

    render() {
        const {categories = [], selectedCategory} = this.props;
        if(!categories.length){
            return null;
        }
        return (
                <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <ProductsFilterItem key='all' name='All' onClick={ () => this.onFilterProducts(0) } active={ 0 === selectedCategory } />
                    {
                        categories.map( c => <ProductsFilterItem key={c.id} {...c} active={ c.id === selectedCategory } /> )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.items
});
const mapDispatchToProps = null;


export default connect( mapStateToProps, mapDispatchToProps )(ProductsFilter);