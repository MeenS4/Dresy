import styles from './Product.module.scss';

import ProductPictures from '../ProductPictures/ProductPictures';
import ProductInfo from '../ProductInfo/ProductInfo';

export default function Product() {
  return (
    <div className={styles['content']}>
      <ProductPictures />
      <ProductInfo />
    </div>
  );
}
