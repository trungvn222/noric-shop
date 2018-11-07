import React, { PureComponent } from 'react';
import ProductsFilter from '../ProductsFilter';
import Products from '../Products';
import './style.css';

class NewArrival extends PureComponent {
    render() {
        const { categories, products, onChangeCategory, selectedCategory, addToCart } = this.props;
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
                            <ProductsFilter onChangeCategory={onChangeCategory} categories={categories} selectedCategory={selectedCategory} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Products addToCart={addToCart} products={products} />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NewArrival;