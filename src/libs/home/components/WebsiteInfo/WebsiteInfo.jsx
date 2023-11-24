import DresyLogoIconFooter from 'shared/components/Icons/DresyLogoIconFooter';
import styles from './WebsiteInfo.module.scss';

export default function WebsiteInfo() {
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
