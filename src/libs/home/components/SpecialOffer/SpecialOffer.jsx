import classNames from 'classnames';
import styles from './SpecialOffer.module.scss';

export default function SpecialOffer({
  title,
  subTitle,
  ctaText,
  subCtaText,
  bgColor = '#f2f5f7',
  isFullWidth = false,
}) {
  const classes = classNames(styles['special-offer'], {
    [styles['full-width']]: isFullWidth,
  });

  return (
    <div className={classes} style={{ backgroundColor: bgColor }}>
      <div className={styles['text']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['subtitle']}>{subTitle}</div>
      </div>
      <div className={styles['ctas']}>
        <div className={styles['cta']}>{ctaText}</div>
        <div className={styles['sub-cta']}>{subCtaText}</div>
      </div>
    </div>
  );
}
