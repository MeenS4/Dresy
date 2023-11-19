import styles from './Hero.module.scss';

import HeroContent from 'libs/home/components/Product/Product';
import HeroDirectory from 'libs/home/components/Directory/Directory';

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <HeroDirectory />
      <HeroContent />
    </div>
  );
}
