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

const findPrice = p => p.salePrice ? p.salePrice : p.originalPrice;

const sortByPrice = (p1, p2) => {
    let price1 = findPrice(p1);
    let price2 = findPrice(p2);
    return price1 - price2;
}

const sortByName = (p1,p2) => {
    return p1.name.localeCompare(p2.name);
}
const filterByPrice = (p, min, max) => {
    var price = findPrice(p);

    return price >= min && price <= max;
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
        paged: 1,
        minPrice: 0,
        maxPrice: 0,
        defaultMinPrice: 0,
        defaultMaxPrice: 0,
        loadComplete: false
    }
    componentDidMount(){
        
        products.products((res) => {
            const { selectedCategory } = this.state;
            let newProductsTemp = res.filter(p => filter(p, selectedCategory) ).sort(sortByPrice);
            let minPrice = 0;
            let maxPrice = 0;

            if(newProductsTemp.length > 0){
                minPrice = findPrice(newProductsTemp[0]);
                maxPrice = findPrice(newProductsTemp[newProductsTemp.length - 1]);
            }

            this.setState({
                products: res,
                minPrice: minPrice,
                maxPrice: maxPrice,
                defaultMinPrice: minPrice,
                defaultMaxPrice: maxPrice,
                loadComplete: true
            });
        });

        categories.categories( (res) => {
            this.setState({
                categories: res,
                loadComplete: true
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

    onFilterByPrice(v){
        this.setState({
            minPrice: v[0] || 0,
            maxPrice: v[1] || 0
        })
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
            paged, 
            minPrice,
            maxPrice,
            defaultMinPrice,
            defaultMaxPrice,
            loadComplete } = this.state;
        

        
        let newProducts = products.filter(p => filter(p, selectedCategory) ).filter( p => filterByPrice(p, minPrice, maxPrice) );
        let totalPosts  = newProducts.length;
        let offset = (currentPostsPerPage * (paged - 1));
        let limit  = offset + currentPostsPerPage;
        const totalPage = Math.round( newProducts.length/currentPostsPerPage + 0.4 );
        

        limit = limit >= totalPosts ? totalPosts : limit;

        switch( currentSort.id ){
            case 1 :
                newProducts = newProducts.sort( sortByPrice );
                break;
            case 2 :
                newProducts = newProducts.sort( sortByName );
                break;
        }

        newProducts = newProducts.slice(offset, limit);

        console.log(loadComplete);

        return (
            <div className="super_container">
                <Header languages={languages} cart={cart} topText='free shipping on all u.s orders over $50' />
                <Hamburger languages={languages} />
                { newProducts.length > 0 && <Categories 
                    onFilterByCategory={ this.filterProducts.bind(this) } 
                    onSort={ this.onSort.bind(this) }
                    onShow={ this.onShow.bind(this) }
                    onPagination= { this.onPagination.bind(this) }
                    onFilterByPrice= { this.onFilterByPrice.bind(this) }
                    categories={categories} 
                    products={newProducts} 
                    selectedCategory={selectedCategory} 
                    sortList={sortList} 
                    currentSort={currentSort}
                    postsPerPage={postsPerPage}
                    currentPostsPerPage={currentPostsPerPage} 
                    paged={paged}
                    total={totalPage}
                    limit={limit}
                    offset={offset + 1}
                    totalPosts={totalPosts}
                    defaultMinPrice={defaultMinPrice}
                    defaultMaxPrice={defaultMaxPrice}
                    />}
                <Footer />
            </div>
        );
    }
}

export default App;
