//styles
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import ProductDetail from './containers/ProductDetail';


//data
import languages from './data/languages';

class App extends Component {
    state = {
        languages,
        categories: [],
        products : [],
        cart : {
            cartUrl : '#',
            itemCount: 0
        }
    }

    constructor(props){
        super(props);

        this.onUpdateCart = (number) => {
            let { itemCount } = this.state.cart;
            this.setState({
                cart : {
                    itemCount: number + itemCount
                }
            });
        }
    }
    
    render() {
        
        const {
            categories,
            languages, 
            cart,
            onUpdateCart
        } = this.state;

        return (
            <div className="super_container">
                <Header languages={languages} cart={cart} topText='free shipping on all u.s orders over $50' />
                <Hamburger languages={languages} />
                <ProductDetail onUpdateCart={ this.onUpdateCart } />
                <Footer />
            </div>
        );
    }
}

export default App;
