
export const findCategoryById = (categories, id) => {
    if(!categories.length){
        return null;
    }
    const cat = categories.find( v => {
        return v.id === id;
    });
    return cat;
}
