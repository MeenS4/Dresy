import styles from './SuggestedProduct.module.scss';

export default function Product({ img }) {
  return (
    <div className={styles['product']}>
      <img className={styles['image']} src={img} alt='product'></img>
      <div className={styles['info']}>
        <div className={styles['title']}>
          Zielone wzorzyste szorty casualowe
        </div>
        <div className={styles['price']}>52 PLN</div>
      </div>
    </div>
  );
}
