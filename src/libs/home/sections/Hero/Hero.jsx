import styles from './Hero.module.scss';

import HeroContent from 'libs/home/components/Content/HeroContent';
import HeroDirectory from 'libs/home/components/Directory/HeroDirectory';

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <HeroDirectory />
      <HeroContent />
    </div>
  );
}
