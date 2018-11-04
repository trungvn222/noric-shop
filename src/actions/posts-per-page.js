import {LIMIT_ACTION} from '.';

export const loadLimit = dispatch => {
    dispatch(loadLimitSuccess());
}
export const changeLimit = limit => {
    return dispatch => {
        dispatch(changeLimitSucess(limit));
    }
}
export const resetLimit = () => {
    return dispatch => {
        dispatch(resetLimitSucess());
    }
}

export const loadLimitSuccess = () => ({
    type : LIMIT_ACTION.LOAD_LIMIT,
    payload: {
        items: [4,6,8,16,24]
    }
});
export const changeLimitSucess = (limit) =>({
    type : LIMIT_ACTION.CHANGE_LIMIT,
    payload: {
        limit
    }
});
export const resetLimitSucess = () => ({
    type : LIMIT_ACTION.RESET_LIMIT,
})