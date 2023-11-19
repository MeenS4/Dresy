import DresyLogoIconFooter from 'components/shared/Icons/DresyLogoIconFooter';
import styles from './FooterInfo.module.scss';

export default function FooterInfo() {
  return (
    <div className={styles['footer-info']}>
      <div className={styles['brand']}>
        <div className={styles['logo']}>
          <DresyLogoIconFooter />
        </div>
        <div className={styles['quote']}>Where Style Meets Sophistication.</div>
      </div>

      <div className={styles['copyrights']}>
        <div className={styles['copyright']}>Created by Astraq Studio.™</div>
        <div className={styles['copyright']}>
          Copyright © 2023 Dresy. All right reserved
        </div>
      </div>
    </div>
  );
}
