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

const filter = (p, cat = 0) => !cat || p.categories.indexOf(cat) >= 0;

class App extends Component {
    state = {
        languages,
        categories,
        products,
        cart : {
            cartUrl : '#',
            itemCount: 2
        },
        selectedCategory: 0
    }
    filterProducts(cat){
        this.setState({
            selectedCategory: cat
        });
    }
    render() {
        const {categories, products, languages, cart, selectedCategory} = this.state;
        const newProducts = products.filter(p => filter(p, selectedCategory) );

        return (
            <div className="super_container">
                <Header languages={languages} cart={cart} topText='free shipping on all u.s orders over $50' />
                <Hamburger languages={languages} />
                <Home categories={categories} selectedCategory={selectedCategory} products={newProducts} onFilterProducts = { this.filterProducts.bind(this) } />
                <Footer />
            </div>
        );
    }
}

export default App;
