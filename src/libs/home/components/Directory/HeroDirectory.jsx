import styles from './HeroDirectory.module.scss';

export default function HeroDirectory() {
  return (
    <div className={styles['directory']}>
      <div className={styles['directory__category']}>Szorty</div>
      <div className={styles['text']}>/</div>
      <div className={styles['directory__product-name']}>
        Zielone wzorzyste szorty casualowe (15G01-SKU)
      </div>
    </div>
  );
}
