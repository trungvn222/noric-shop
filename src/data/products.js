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
            newData = [
                {
                    id: 1,
                    category: [1],
                    name: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
                    thumbnail: 'images/product_1.png',
                    discount: 20,
                    isNew: false,
                    isSale: true,
                    originalPrice: 540,
                    salePrice: 520,
            
                },
                {
                    id: 2,
                    category: [3],
                    name: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
                    thumbnail: 'images/product_2.png',
                    discount: 0,
                    isNew: true,
                    isSale: false,
                    originalPrice: 610,
                    salePrice: 610,
                },
                {
                    id: 3,
                    category: [2],
                    name: 'Blue Yeti USB Microphone Blackout Edition',
                    thumbnail: 'images/product_3.png',
                    discount: 0,
                    isNew: false,
                    isSale: true,
                    originalPrice: 120,
                    salePrice: 120,
                },
                {
                    id: 4,
                    category: [2,3],
                    name: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
                    thumbnail: 'images/product_4.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 410,
                    salePrice: 410,
                },
                {
                    id: 5,
                    category: [1],
                    name: 'Pryma Headphones, Rose Gold & Grey',
                    thumbnail: 'images/product_5.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 180,
                    salePrice: 100,
                },
                {
                    id: 6,
                    category: [1,2],
                    name: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
                    thumbnail: 'images/product_6.png',
                    discount: 20,
                    isNew: false,
                    isSale: true,
                    originalPrice: 540,
                    salePrice: 520,
                },
                {
                    id: 7,
                    category: [2,3],
                    name: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
                    thumbnail: 'images/product_7.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 610,
                    salePrice: 610,
                },
                {
                    id: 8,
                    category: [3],
                    name: 'Blue Yeti USB Microphone Blackout Edition',
                    thumbnail: 'images/product_8.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 120,
                    salePrice: 120,
                },
                {
                    id: 9,
                    category: [3],
                    name: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
                    thumbnail: 'images/product_9.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 410,
                    salePrice: 410,
                },
                {
                    id: 10,
                    category: [3],
                    name: 'Pryma Headphones, Rose Gold & Grey',
                    thumbnail: 'images/product_10.png',
                    discount: 0,
                    isNew: false,
                    isSale: false,
                    originalPrice: 180,
                    salePrice: 180,
                }
            ];
            callback(newData); 
        } , (error) => console.log(error)
        ).catch(error => console.error('Error:', error));
    }
}