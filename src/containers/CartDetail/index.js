import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Currency from '../../components/Currency';
import { loadCart } from '../../actions/cart';


class CartDetail extends PureComponent {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loadCart());
    }
    render() {
        const {cart = [], totalPrice} = this.props;
        console.log(cart.length);
        if(cart.length === 0){
            console.log(cart.length);
            return null;
        }
        return (
            <div className="container" style={{
                paddingTop: '200px'
            }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(c => <tr>
                                <td>{c.product.id}</td>
                                <td>{c.product.name}</td>
                                <td><Currency price={c.product.salePrice} /></td>
                                <td>{c.quantity}</td>
                                <td><a className="btn">Remove</a></td>
                        </tr>)
                        }
                    </tbody>
                </table>
                <h2>TotalPrice : <Currency price={totalPrice} /></h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        cart: state.cart.cart,
        totalPrice: state.cart.totalPrice
    }
};
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);