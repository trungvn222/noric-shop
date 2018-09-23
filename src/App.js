//styles
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Home from './containers/Home';

//data
import languages from './data/languages';
import categories from './data/categories';
import products from './data/products';

class App extends Component {
    state = {
        languages,
        categories,
        products,
        cart : {
            cartUrl : '#',
            itemCount: 2
        }
    }
    render() {
        const {categories, products, languages, cart} = this.state;
        return (
            <div className="super_container">
                <Header languages={languages} cart={cart} topText='free shipping on all u.s orders over $50' />
                <Hamburger languages={languages} />
                <Home categories={categories} products={products} />
                <Footer />
            </div>
        );
    }
}

export default App;
