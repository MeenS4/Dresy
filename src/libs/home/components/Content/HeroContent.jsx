import styles from './HeroContent.module.scss';

import ProductPictures from '../ProductPictures/ProductPictures';
import ProductInfo from '../ProductInfo/ProductInfo';

export default function HeroContent() {
  return (
    <div className={styles['content']}>
      <ProductPictures />
      <ProductInfo />
    </div>
  );
}
