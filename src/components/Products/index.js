import React, { PureComponent } from 'react';
import Product from '../Product';
import './style.css';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';

class Products extends PureComponent {
    componentDidMount(){
        this.props.fetchProducts;
    }
    render() {
        const {products = []} = this.props;
        
        if(!products.length){
            return null;
        }
        return (
            <div className="product-grid">
            {
                products.map(p => <Product key={p.id} {...p} />)
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items
})
const mapDispatchToProps = dispatch => ({
    fetchProducts: fetchProducts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);