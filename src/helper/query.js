import qs from 'query-string';

export const getParam = (query) => {
    return key => {
        const params = qs.parse(query);
        return params[key] || '';
    }
}

export const addQueryString = (history) => {
    return key => {
       return value => {
            history.push({
                search: `${key}=${value}`
            });
       }
    }
}

export const parseFilter = query => {
    const filter = getParam(query)('filter');
    return filter && JSON.parse(filter);
}

export const addFilterQueryString = (history) => {
    return filter => {
        addQueryString(history)('filter')(JSON.stringify(filter));
    }
}