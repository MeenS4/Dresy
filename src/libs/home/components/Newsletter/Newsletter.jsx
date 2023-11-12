import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <div className={styles['newsletter']}>
      <div className={styles['text']}>
        <div className={styles['title']}>Zyskaj 10% Rabatu Już Teraz!</div>
        <div className={styles['subtitle']}>
          Zapisz się do newslettera i otrzymaj kod rabatowy
        </div>
      </div>
      <div className={styles['ctas']}>
        <div className={styles['cta']}>Zapisz się</div>
        <div className={styles['sub-cta']}>Newsletter</div>
      </div>
    </div>
  );
}
