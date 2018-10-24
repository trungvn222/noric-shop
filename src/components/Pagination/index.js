import React, { PureComponent } from 'react';
import PaginationItem from '../PaginationItem';
import './style.css';

class Pagination extends PureComponent {
    render() {
        const { total, paged, onPagination } = this.props;
        let items = [];
        for (let index = 1; index <= total ; index++) {
            items.push( <PaginationItem key={index} page={index} onClick={ () => onPagination(index) } /> )
        }
        if(total === 0){
            return null;
        }
        return (
            <div className="pages d-flex flex-row align-items-center">
                <div className="page_current">
                    <span>{paged}</span>
                    <ul className="page_selection">
                        {items}
                    </ul>
                </div>
                <div className="page_total"><span>of</span> {total}</div>
                <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
            </div>
        );
    }
}

export default Pagination;