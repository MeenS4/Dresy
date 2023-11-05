import './ProductPictures.scss';

import leadingImage from 'resources/images/product-pictures/hero-leading-image.png';
import secondaryImage from 'resources/images/product-pictures/hero-secondary-image.png';

export default function ProductPictures() {
  return (
    <div className='product-images'>
      <div className='image'>
        <img src={leadingImage} alt='' />
      </div>
      <div className='image'>
        <img src={secondaryImage} alt='' />
      </div>
    </div>
  );
}
