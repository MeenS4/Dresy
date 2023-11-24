import styles from './BaseCtaButton.module.scss';

export default function BaseCtaButton({ text, onClick }) {
  return (
    <div className={styles['base-cta-button']} onClick={onClick}>
      {text}
    </div>
  );
}
