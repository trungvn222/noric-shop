import React, { PureComponent } from 'react';
import PostsPerPageItem from '../PostsPerPageItem';
import './style.css';

class PostsPerPage extends PureComponent {
    render() {
        const { list, current, onSelect } = this.props;
        return (
            <React.Fragment>
                <span>Show</span>
                <span class="num_sorting_text">{current}</span>
                <i class="fa fa-angle-down"></i>
                {
                    list.length > 0 &&
                    <ul class="sorting_num">
                        {
                            list.map( i =>  <PostsPerPageItem number={i} onClick={ () => onSelect(i) } /> )
                        }
                    </ul>
                }
            </React.Fragment>
        );
    }
}

export default PostsPerPage;