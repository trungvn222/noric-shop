import React, { PureComponent } from 'react';
import './style.css';

class ProductQuantity extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1
        }

        this.minus = (e) => {
            e.preventDefault();
            let {quantity} = this.state;
            if(quantity > 1){
                quantity--;
            }else {
                quantity = 1;
            }
            this.setState({
                quantity
            });
        }
        this.plus = (e) => {
            e.preventDefault();
            let {quantity} = this.state;
            quantity++;
            this.setState({
                quantity
            });
            
        }
    }

    componentDidUpdate(prevProps, prevState){
        const { afterChange } = this.props;
        const { quantity } = this.state;

        if(typeof afterChange == "function"){
            afterChange(quantity)
        }
    }



    render() {
        const {quantity} = this.state;

        return (
            <React.Fragment>
                <span>Quantity:</span>
                <div className="quantity_selector">
                    <a href="#" onClick={ (e) => this.minus(e) } className="minus"><i className="fa fa-minus" aria-hidden="true"/></a>
                    <span id="quantity_value">{quantity}</span>
                    <a href="#" onClick={ (e) => this.plus(e) }  className="plus"><i className="fa fa-plus" aria-hidden="true"/></a>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductQuantity;