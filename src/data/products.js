import API from './restAPI';
export default {
    products : function(callback) {
        return fetch(API.products.get).then( res => {
            return res.json()
        } ).then( res => { 
            var newData = [];
            console.log(res.body);
            res.body.length && res.body.map( (p) => {
                var newP = p;
                newP['discount'] = p.originalPrice - p.salePrice;
                newP['isSale'] = (p.originalPrice - p.salePrice) !== 0;
                newP['isNew'] = false;

                newData.push(newP);
            } );
            callback(newData); } 
        ).catch(error => console.error('Error:', error));
    }
}