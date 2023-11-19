import styles from './ColorVariants.module.scss';

export default function ColorVariants({ materialImages }) {
  return (
    <div className={styles['product-variants']}>
      <div className={styles['picked-variant']}>Kolor: Zielony</div>
      <div className={styles['variants']}>
        {materialImages.map((image) => {
          return (
            <div className={styles['color']} key={image.id}>
              <img src={image.image} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
