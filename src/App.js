//styles
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {Redirect} from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import thunk from 'redux-thunk';

//pages
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Category from './containers/Categories';
import ProductDetail from './containers/ProductDetail';
import Home from './containers/Home';
import CartDetail from './containers/CartDetail';



var store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

const findItemInCart = (cart = [], productID) => {
    let cartLineIndex = -1;
    if(cart.length > 0){
        cartLineIndex = cart.findIndex((v, i) =>  v.id === productID );
    }
    return cartLineIndex;
}

const totalItems = (cart = []) => {
    let total = 0;
    if(cart.length > 0){
        cart.forEach( v => {
            total += v.quantity;
        } )
    }

    return total;
}

class App extends Component {
    render() {
        
        return (
            <Provider store={store}>
                <Router>
                    <div className="super_container">
                        <Header topText='free shipping on all u.s orders over $50' />
                        <Hamburger />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/category/:id/page/:page" component={Category} />
                            <Route path="/category/:id?" component={Category} />
                            <Route path="/product/:id" component={ProductDetail} />
                            <Route path="/cart" component={CartDetail} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
