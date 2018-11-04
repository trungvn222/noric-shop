
export const findCategoryById = categories => {
    return id => {
        if(!categories.length){
            return null;
        }
        const cat = categories.find( v => {
            console.log(v);
            return v.id === id;
        });
        return cat;
    }
}
export const addCrumb = (crumb) => {
    let items = [
        {  
            label : 'Home',
            active: false,
            url: '/'
        }
    ];

    items.push(crumb);

    return items;
}