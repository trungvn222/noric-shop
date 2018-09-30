import React, { PureComponent } from 'react';
import ProductsSortItem from '../ProductsSortItem';
import './style.css';

class ProductsSort extends PureComponent {
    render() {
        const { currentSort, sortList, onSort } = this.props;
       
        return (
            <React.Fragment>
                {
                    currentSort && <span className="type_sorting_text">{currentSort.name}</span>
                }
                {
                    sortList.length > 0 && <i className="fa fa-angle-down" />
                }
                {
                    sortList.length > 0 && 
                    <ul className="sorting_type">
                        {
                            sortList.map( (s,i) => <ProductsSortItem name={s.name} onClick={ () => onSort(s) } /> )
                        }
                    </ul>
                }
            </React.Fragment>
        );
    }
}

export default ProductsSort;