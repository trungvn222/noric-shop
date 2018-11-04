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



var store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

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
                            <Route path="/shop/page/:page" component={Category} />
                            <Route path="/shop" component={Category} />
                            <Route path="/category/:id/page/:page" component={Category} />
                            <Route path="/category/:id" component={Category} />
                            <Redirect from='/category' to='/shop'/>
                            <Route path="/product/detail/:id" component={ProductDetail} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
