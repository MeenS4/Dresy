import styles from './SuggestedProduct.module.scss';

export default function Product({ product }) {
  const { title, price, img } = product;

  return (
    <div className={styles['product']}>
      <img className={styles['image']} src={img} alt='product' />
      <div className={styles['info']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['price']}>{price} PLN</div>
      </div>
    </div>
  );
}
