import API from './restAPI';
export default {
    categories : function(callback) {
        return fetch(API.categories.get).then( res => {
            return res.json()
        } ).then( res => { 
            var newCats = [];
            res.body && res.body.filter( cat => cat.name ).map( (cat, index) => {
                let newCat = cat;
                newCat['thumbnail'] = `images/banner_${(index + 1)}.jpg`;
                newCats.push(newCat);
            } );
            
            callback(newCats); 
        }).catch(error => console.error('Error:', error));
    }
}