import React, {PureComponent} from 'react';


class GalleryProductDetail extends PureComponent {
    constructor(props){
        super(props);

        const {gallery} =  this.props;
        const currentImage = gallery.length > 0 ? gallery[0] : {};

        this.state = {
            active : 0,
            currentImage
        }

        this.onClick = (image, active, e) => {
            e.preventDefault();
            console.log(image);
            this.setState({
                currentImage : image,
                active
            });
        }
    }


    render() {
        const {gallery} = this.props; 
        const {currentImage, active} = this.state;

        if(gallery.length == 0){
            return null;
        }

        return (
            <div className="single_product_pics">
                <div className="row">
                    <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                        <div className="single_product_thumbnails">
                            <ul>
                                {
                                    gallery.map((value, index) => {
                                        return(
                                            <li className={ index === active ? 'acctive' : '' } key={index}>
                                                <a href="#" onClick={ (e) => { this.onClick(value, index, e); console.log('test'); } }><img src={value.thumbnail} alt/></a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 image_col order-lg-2 order-1">
                        <div className="single_product_image">
                            <div
                            className="single_product_image_background"
                            style={{
                            backgroundImage: `url(${currentImage.imageFull})`
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default GalleryProductDetail;