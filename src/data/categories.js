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
            console.log(newCats);
            newCats = [
                {
                    id: 1,
                    name: 'women\'s',
                    thumbnail: 'images/banner_1.jpg',
                    link: 'categories.html'
                },
                {
                    id: 2,
                    name: 'accessories\'s',
                    thumbnail: 'images/banner_2.jpg',
                    link: 'categories.html'
                },
                {
                    id: 3,
                    name: 'men\'s',
                    thumbnail: 'images/banner_3.jpg',
                    link: 'categories.html'
                }
            ];
            callback(newCats); 
        }).catch(error => console.error('Error:', error));
    }
}