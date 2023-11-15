import styles from './Product.module.scss';

import product1 from 'resources/images/suggested-products/product1.png';

export default function Product() {
  return (
    <div className={styles['product']}>
      <img className={styles['image']} src={product1} alt='product'></img>
      <div className={styles['info']}>
        <div className={styles['title']}>
          Zielone wzorzyste szorty casualowe
        </div>
        <div className={styles['price']}>52 PLN</div>
      </div>
    </div>
  );
}
