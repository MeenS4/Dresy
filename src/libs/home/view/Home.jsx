import styles from './Home.module.scss';

import Navbar from '../sections/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import Description from '../sections/Description/Description';
import Newsletter from '../components/Newsletter/Newsletter';
import OtherProducts from '../sections/OtherProducts/OtherProducts';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles['main']}>
        <Hero />
        <Description />
        <div></div>
        <Newsletter />
        <div></div>
        <OtherProducts />
      </div>
    </>
  );
}
