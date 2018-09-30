import React, { PureComponent } from 'react';
import ProductsFilter from '../ProductsFilter';
import Products from '../Products';
import './style.css';

class NewArrival extends PureComponent {
    render() {
        const { categories, products, onFilterProducts, selectedCategory } = this.props;
        return (
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <ProductsFilter selectedCategory={selectedCategory} categories={categories} onFilterProducts= { onFilterProducts }/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <Products products={products} />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NewArrival;