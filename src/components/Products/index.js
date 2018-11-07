import React, { PureComponent } from 'react';
import Product from '../Product';
import './style.css';

class Products extends React.Component {
    render() {
        const {products = [], loading = false, addToCart} = this.props;
        
        if(!products.length){
            return null;
        }
        return (
            <div className="product-grid">
            {
                loading ? 
                <div className="loading">&nbsp;</div>  :  products.map(p => <Product addToCart={ () => {
                    addToCart(p);
                } } key={p.id} {...p} />)
            }
            </div>
        );
    }
}


export default Products;