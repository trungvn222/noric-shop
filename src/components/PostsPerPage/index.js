import React, { PureComponent } from 'react';
import PostsPerPageItem from '../PostsPerPageItem';
import './style.css';

class PostsPerPage extends PureComponent {
    render() {
        const { list, current, onChangeLimit } = this.props;
        return (
            <React.Fragment>
                <span>Show</span>
                <span className="num_sorting_text">{current}</span>
                <i className="fa fa-angle-down"></i>
                {
                    list.length > 0 &&
                    <ul className="sorting_num">
                        {
                            list.map( i =>  <PostsPerPageItem key={i} number={i} onClick={ () => onChangeLimit(i) } /> )
                        }
                    </ul>
                }
            </React.Fragment>
        );
    }
}

export default PostsPerPage;