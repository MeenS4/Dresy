import styles from './SuggestedProducts.module.scss';

import Product from 'libs/home/components/SuggestedProduct/SuggestedProduct';

import product1 from 'resources/images/suggested-products/product1.png';
import product2 from 'resources/images/suggested-products/product2.jpg';
import product3 from 'resources/images/suggested-products/product3.jpg';
import product4 from 'resources/images/suggested-products/product4.png';

const images = [product1, product2, product3, product4];

export default function OtherProducts() {
  return (
    <div className={styles['other-products']}>
      <div className={styles['header']}>
        <div className={styles['section-title']}>Zobacz także.</div>
        <div className={styles['section-desc']}>
          Te produkty również mogą przypaść ci do gustu
        </div>
      </div>
      <div className={styles['products']}>
        {images.map((img) => {
          return <Product img={img} />;
        })}
        ;
      </div>
    </div>
  );
}
