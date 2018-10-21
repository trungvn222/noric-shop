//styles
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

//pages
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Category from './containers/Categories';
import ProductDetail from './containers/ProductDetail';
import Home from './containers/Home';



var store = createStore(reducers);



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="super_container">
                        <Header topText='free shipping on all u.s orders over $50' />
                        <Hamburger />
                        <Route exact path="/" component={Home} />
                        <Route path="/category/:id" component={Category} />
                        <Route path="/product/detail/:id" component={ProductDetail} />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
