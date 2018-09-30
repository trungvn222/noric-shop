//styles
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Home from './containers/Home';
import Categories from './containers/Categories';


//data
import languages from './data/languages';
import categories from './data/categories';
import products from './data/products';

const filter = (p, cat = 0) => {
    return !cat || p.category.indexOf(cat) >= 0;
};

const sortByPrice = (p1, p2) => {
    let price1 = p1.salePrice ? p1.salePrice : p1.originalPrice;
    let price2 = p2.salePrice ? p2.salePrice : p2.originalPrice;
    return price1 - price2;
}

const sortByName = (p1,p2) => {
    return p1.name.localeCompare(p2.name);
}

class App extends Component {
    state = {
        languages,
        categories: [],
        products : [],
        cart : {
            cartUrl : '#',
            itemCount: 2
        },
        sortList : [
            { name: 'Default Sort', id : 0 },
            { name: 'Price', id : 1 },
            { name: 'Product Name', id : 2 }
        ],
        currentSort : { name: 'Default Sort', id : 0 },
        selectedCategory: 0,
        postsPerPage : [2,4,8,12],
        currentPostsPerPage : 10,
        paged: 1
    }
    componentDidMount(){
        const { currentPostsPerPage } = this.state;
        products.products((res) => {
            this.setState({
                products: res,
            });
        });

        categories.categories( (res) => {
            this.setState({
                categories: res
            });
        } );
    }
    filterProducts(cat){
        this.setState({
            selectedCategory: cat
        });
    }

    onSort(sort){
        this.setState({
            currentSort : sort
        });
    }

    onShow(number){
        this.setState({
            currentPostsPerPage: number
        });
    }

    onPagination(page){
        this.setState({
            paged: page
        });
    }

    render() {
        
        const {
            categories,
            languages, 
            cart, 
            selectedCategory, 
            products, 
            sortList, 
            currentSort,
            postsPerPage,
            currentPostsPerPage,
            paged } = this.state;
            
        let offset = (currentPostsPerPage * (paged - 1));
        let limit  = offset + currentPostsPerPage;
        let newProducts = products.filter(p => filter(p, selectedCategory) );
        const totalPage = Math.round( newProducts.length/currentPostsPerPage + 0.5 );

        switch( currentSort.id ){
            case 1 :
                newProducts = newProducts.sort( sortByPrice );
                break;
            case 2 :
                newProducts = newProducts.sort( sortByName );
                break;
        }

        newProducts = newProducts.slice(offset, limit);

        


        return (
            <div className="super_container">
                <Header languages={languages} cart={cart} topText='free shipping on all u.s orders over $50' />
                <Hamburger languages={languages} />
                <Categories 
                    onFilterByCategory={ this.filterProducts.bind(this) } 
                    onSort={ this.onSort.bind(this) }
                    onShow={ this.onShow.bind(this) }
                    onPagination= { this.onPagination.bind(this) }
                    categories={categories} 
                    products={newProducts} 
                    selectedCategory={selectedCategory} 
                    sortList={sortList} 
                    currentSort={currentSort}
                    postsPerPage={postsPerPage}
                    currentPostsPerPage={currentPostsPerPage} 
                    paged={paged}
                    total={totalPage}
                    />
                <Footer />
            </div>
        );
    }
}

export default App;
