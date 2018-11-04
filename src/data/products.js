import API from './restAPI';
import ProductDetail from './productDetail';
export default {
    products : function(callback) {
        return fetch(API.products.get).then( res => {
            return res.json()
        }, (error) => console.log(error) ).then( res => { 
            var newData = [];
            res.body.length && res.body.map( (p) => {
                var newP = p;
                newP['discount'] = p.originalPrice - p.salePrice;
                newP['isSale'] = (p.originalPrice - p.salePrice) !== 0;
                newP['isNew'] = false;

                newData.push(newP);
            } );
            
            callback(newData); 
        }
        ).catch(error => console.error('Error:', error));
    },
    
    product : (id, callback) => {
        callback(ProductDetail);
    }
}