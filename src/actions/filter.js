import { FILTER_ACTION } from '.';

const changeFilter = (filter) => {
    return dispatch => {
        const { limit = 4, page = 1 } = filter;
        filter.skip = (page - 1) * filter;
        dispatch(changeFilterSuccess(filter));
    }
}

export const changeFilterSuccess = filter =>({
    type: FILTER_ACTION.CHANGE_FILTER,
    payload: {
        filter
    }
})