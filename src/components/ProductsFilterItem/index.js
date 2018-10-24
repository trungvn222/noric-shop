import React, { PureComponent } from 'react';
import { fetchProducts } from '../../actions/products';
import {connect} from 'react-redux';

class ProductsFilterItem extends PureComponent {
    clickHandle(e){
        e.preventDefault();
        const {id, dispatch} = this.props;
        fetchProducts(id)(dispatch);
    }
    render() {
        const {name, active, id} = this.props;

        const classes = `grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${ active ? 'active':'' }`;
        return (
            <li className={classes}>
                <a onClick={ this.clickHandle.bind(this) }>{name}</a>
                
            </li>
        );
    }
}

const mapStateToProps = null;
const mapDispathToProps = null;
export default connect(mapStateToProps, mapDispathToProps)(ProductsFilterItem);