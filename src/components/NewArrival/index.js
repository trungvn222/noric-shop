import React, { PureComponent } from 'react';
import ProductsFilter from '../ProductsFilter';
import Products from '../Products';
import './style.css';

class NewArrival extends PureComponent {
    render() {
        const { categories, products } = this.props;
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
                            <ProductsFilter categories={categories}/>
                        </div>
                    </div>
                    <Products products={products} />
                </div>
            </div>
        );
    }
}

export default NewArrival;