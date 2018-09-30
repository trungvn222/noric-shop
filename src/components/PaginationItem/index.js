import React, { PureComponent } from 'react';


class PaginationItem extends PureComponent {
    onClick(e){
        e.preventDefault();
        this.props.onClick();
    }
    render() {
        const { page } = this.props;
        return (
            <li><a onClick={ this.onClick.bind(this) } href="#">{page}</a></li>
        );
    }
}


export default PaginationItem;