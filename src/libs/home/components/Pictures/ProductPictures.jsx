import styles from './ProductPictures.module.scss';

import leadingImage from 'resources/images/product-pictures/hero-leading-image.png';
import secondaryImage from 'resources/images/product-pictures/hero-secondary-image.png';

export default function ProductPictures() {
  return (
    <div className={styles['product-images']}>
      <div className={styles['image']}>
        <img src={leadingImage} alt='' />
      </div>
      <div className={styles['image']}>
        <img src={secondaryImage} alt='' />
      </div>
    </div>
  );
}
