import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { loadCart } from '../../actions/cart';


class CartDetail extends PureComponent {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loadCart());
    }
    render() {
        const {cart = []} = this.props;
        console.log(cart.length);
        if(cart.length === 0){
            console.log(cart.length);
            return null;
        }
        return (
            <div style={{
                paddingTop: '200px'
            }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(c => <tr>
                                <td>{c.product.id}</td>
                                <td>{c.product.name}</td>
                                <td>{c.quantity}</td>
                                <td><a className="btn">Remove</a></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        cart: state.cart.cart
    }
};
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);