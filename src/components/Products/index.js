import React, { PureComponent } from 'react';
import Product from '../Product';
import './style.css';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';

class Products extends PureComponent {
    componentDidMount(){
        const {dispatch} = this.props;
        fetchProducts()(dispatch);
    }
    render() {
        const {products = [], loading = false} = this.props;
        
        if(!products.length){
            return null;
        }
        return (
            <div className="product-grid">
            {
                loading ? <div className="loading">&nbsp;</div>  :  products.map(p => <Product key={p.id} {...p} />)
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading
})
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Products);