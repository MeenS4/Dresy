import styles from './HeroContent.module.scss';

import ProductPictures from '../Pictures/ProductPictures';
import ProductInfo from '../Info/ProductInfo';

export default function HeroContent() {
  return (
    <div className={styles['content']}>
      <ProductPictures />
      <ProductInfo />
    </div>
  );
}
