import React, {PureComponent} from 'react';
import './style.css';

class ProductDetailDescription extends PureComponent {
  render() {
    const {title1 = '', content1 = '', image1 = '', title2 = '', content2 = '', image2 = '', title3 = '', content3 = '', image3 = ''} = this.props;
    return (
        <div className="row">
            <div className="col-lg-5 desc_col">
                <div className="tab_title">
                    <h4>Description</h4>
                </div>
                <div className="tab_text_block">
                    { title1 !== '' && <h2>{title1}</h2> }
                    { content1 !== '' && <p>{content1}</p> }
                </div>
                <div className="tab_image">
                    { image1 !== '' && <img src={image1} />}
                    
                </div>
                <div className="tab_text_block">
                    { title2 !== '' && <h2>{title2}</h2> }
                    { content2 !== '' && <p>{content2}</p> }
                </div>
            </div>
            <div className="col-lg-5 offset-lg-2 desc_col">
                <div className="tab_image">
                    { image2 !== '' && <img src={image2} />}
                </div>
                <div className="tab_text_block">
                    { title3 !== '' && <h2>{title3}</h2> }
                    { content3 !== '' && <p>{content3}</p> }
                </div>
                <div className="tab_image desc_last">
                    { image3 !== '' && <img src={image3} />}
                </div>
            </div>
        </div>
    );
  }
}

export default ProductDetailDescription;