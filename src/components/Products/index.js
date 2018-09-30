import React, { PureComponent } from 'react';
import Product from '../Product';
import './style.css';

class Products extends PureComponent {
    render() {
        const {products} = this.props;
        return (
            <div className="product-grid">
            {
                products.map(p => <Product key={p.id} {...p} />)
            }
            </div>
        );
    }
}

export default Products;