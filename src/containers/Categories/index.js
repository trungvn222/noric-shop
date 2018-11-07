import React, { PureComponent } from 'react';
import {Redirect} from 'react-router';
import ListCategories  from '../../components/ListCategories';
import Products from '../../components/Products';
import Widget from '../../components/Widget';
import Breadcrums from '../../components/Breadcrums';
import ProductsSort from '../../components/ProductsSort';
import PostsPerPage from '../../components/PostsPerPage';
import Pagination from '../../components/Pagination';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import PriceFilter from '../../components/PriceFilter';

import {connect} from 'react-redux';

//action
import { fetchCategory, switchCategory } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import { findCategoryById } from '../../helper/breadcrums';
import { loadLimit } from '../../actions/posts-per-page';
import { addItem } from '../../actions/cart';

import './style.css';

const delimiter = <i className="fa fa-angle-right" aria-hidden="true"></i>;
const findSortById = (list = [], id = 0) => {
    return list.find( item => item.id === id );
}

class Categories extends PureComponent {
    
    breadCrums = [
        {
            id: 'home',
            label: 'Home',
            active: false,
            url: '/'
        }
    ];

    sortList = [
        {
            id: 'sort-default',
            name: 'Sort Default'
        },
        {
            id: 'sort-by-price',
            name: 'Price',
        },
        {
            id: 'sort-by-name',
            name: 'Product Name',
        }
    ]
    currentSort = null;
    baseUrl = '';

    constructor(props){
        super(props);
        const {match} = props;
        this.state = {
            paged : 1,
            limit: 4,
            selectedCategory : 0,
            selectedSort : 'sort-default',
            salePrice: [0, 600]
        };
        this.baseUrl = match.url.split('/page')[0] || '';
        this.currentSort = findSortById(this.sortList, this.state.selectedSort);
        this.addScrum(match.params.id || 0);
    }
    
    filter = () => {
        const { match } = this.props;
        const { limit, paged, selectedSort, salePrice } = this.state;

        const page = match.params.page ? parseInt(match.params.page) :  paged;
        let order = [];
        let where = {
            "and" : [{"salePrice": { 'gt' : salePrice[0] }}, {"salePrice": { 'lte' : salePrice[1] }}] 
        };

        switch(selectedSort){
            case 'sort-by-price':
                order.push('salePrice ASC');
                break;
            case 'sort-by-name':
                order.push('name ASC');
                break;
        }
        
        const filter = { limit, skip: (page - 1)*limit, order, where };
        console.log(filter);
        return filter;
    }

    addScrum = (cat = 0) => {
        const {categories} = this.props;
        let category = findCategoryById(categories, cat);
        if(cat === 0){
            category = {
                id: 0,
                name: 'All',
                link: '/category'
            }
        }
        if(category !== null){
            if(this.breadCrums[1] === 'undefined'){
                this.breadCrums.push({
                    key: category.id,
                    label: category.name,
                    active: true,
                    url: `category/${category.id}`
                });
            }else {
                this.breadCrums[1] = {
                    key: category.id,
                    label: category.name,
                    active: true,
                    url: `category/${category.id}`
                };
            } 
        }
        
    }

    resetFilter = (filter = {}) => {
        const newFilter = {...{
            paged: 1,
            limit: 4
        }, ...filter};
        this.setState(newFilter);
    }

    componentDidMount(){
        const {dispatch, match} = this.props;
        const filter = this.filter();
        dispatch(loadLimit);
        dispatch(fetchCategory);
        dispatch(fetchProducts(match.params.id || 0, filter));
        
    }

    onChangeCategory = (cat) => {
        this.addScrum(cat);
        this.resetFilter({
            selectedCategory: cat
        });
    }



    componentDidUpdate(prevProps, prevState, snapshot){
        const oldPaged = prevState.paged;
        const oldLimit = prevState.limit;
        const oldSelectedCategory = prevState.selectedCategory;
        const oldSelectedSort = prevState.selectedSort;
        const oldSalePrice = prevState.salePrice;

        const { match, dispatch } = this.props;
        const {limit, paged, selectedCategory, selectedSort, salePrice} = this.state;
        
        if( 
            oldPaged !== paged 
            || limit !== oldLimit 
            || oldSelectedCategory !== selectedCategory 
            || oldSelectedSort !== selectedSort
            || oldSalePrice !== salePrice
        ){
            const filter = this.filter();
            dispatch(fetchProducts(selectedCategory, filter));
        }

        if(oldSelectedCategory !== selectedCategory){
            this.baseUrl = match.url.split('/page')[0] || '';
        }
    }

    onChangeLimit = limit => {
        this.resetFilter({
            limit
        });
    }

    onChangePagination = paged => {
        const {match, history} = this.props;
        const baseUrl = match.url.split('/page')[0];
        history.push(baseUrl);
        this.setState({
            paged
        });
    }

    onSort = selectedSort => {
        const {limit} = this.state
        this.resetFilter({
            selectedSort,
            limit
        });
        
        this.currentSort = findSortById(this.sortList, selectedSort);
    }

    onFilterByPrice = (salePrice) => {
        this.resetFilter({
            salePrice
        });
    }

    addToCart = product => {
        const { dispatch } = this.props;
        const item = {
            quantity: 1,
            product
        };

        dispatch(addItem(item));
    }

    render() {
        const { 
            match,
            categories = [], 
            products = [],
            currentSort = {}, 
            onSort,
            sortList = [],
            limitItems = [],
            offset,
            totalItems = 0
            } = this.props;


        const { limit, paged, selectedCategory, salePrice } = this.state;
        const page = match.params.page || paged;
        const totalPage =  Math.round(totalItems/limit + 0.4); 
        
        
        return (
            <React.Fragment>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrums items={this.breadCrums} delimiter={delimiter}  />
                            <div className="sidebar">
                                <Widget title="Product Category">
                                    <ListCategories onChangeCategory={ this.onChangeCategory } categories={categories} selectedCategory={selectedCategory} />
                                </Widget>
                                <Widget title="Filter by Price">
                                    <PriceFilter defaultValue={salePrice} minPrice={0} maxPrice={1000} onFilterByPrice={this.onFilterByPrice} />
                                </Widget>
                            </div>
                            <div className="main_content">
                                <div className="products_iso">
                                    <div className="row">
                                        <div className="col">
                                            <div className="product_sorting_container product_sorting_container_top">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <ProductsSort onSort={this.onSort} currentSort={this.currentSort} sortList={this.sortList} />
                                                    </li>
                                                    <li>
                                                        <PostsPerPage list={limitItems} onChangeLimit={ this.onChangeLimit } current={limit} />
                                                    </li>
                                                </ul>
                                                <Pagination baseUrl={this.baseUrl} paged={page} total={totalPage} onChangePagination={this.onChangePagination} />
                                            </div>
                                            <Products addToCart={this.addToCart} products={products} />
                                            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <PostsPerPage list={limitItems} onChangeLimit={ this.onChangeLimit } current={limit} />
                                                    </li>
                                                </ul>
                                                <span className="showing_results">Showing {offset} – {limit} of {totalItems} results</span>
                                                <Pagination paged={page} baseUrl={this.baseUrl} total={totalPage} onChangePagination={this.onChangePagination} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShippingInformationBar />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        products: state.products.items,
        totalItems: state.products.totalPage,
        categories: state.categories.items,
        limitItems: state.limit.items,
        limit: state.limit.limit,
    }
};
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Categories);