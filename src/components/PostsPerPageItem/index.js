import React, { PureComponent } from 'react';

class PostsPerPageItem extends PureComponent {
    onClick(e){
        e.preventDefault();
        this.props.onClick();
    }
    render() {
        const { number } = this.props;
        return (
            <li className="num_sorting_btn"><a onClick={ this.onClick.bind(this) }>{number}</a></li>
        );
    }
}

export default PostsPerPageItem;