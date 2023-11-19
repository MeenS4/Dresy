import styles from './Home.module.scss';

import Navbar from '../sections/Navbar/Navbar';
import Description from '../sections/Description/Description';
import SpecialOffer from '../components/SpecialOffer/SpecialOffer';
import OtherProducts from '../sections/SuggestedProducts/SuggestedProducts';
import HeroDirectory from '../components/Directory/Directory';
import ProductPictures from '../components/ProductPictures/ProductPictures';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import Footer from '../sections/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles['main']}>
        <HeroDirectory />
        <ProductPictures />
        <ProductInfo />
        <Description />
        <div></div>
        <SpecialOffer
          title={'Zyskaj 10% Rabatu Już Teraz!'}
          subTitle={'Zapisz się newslettera i otrzymaj kod rabatowy'}
          ctaText={'Zapisz się'}
          subCtaText={'Newsletter'}
        />
        <OtherProducts />
        <SpecialOffer
          title={'Odkryj letnią kolekcję'}
          subTitle={'Gorąca letnia kolekcja już dostępna!'}
          ctaText={'Nowa kolekcja'}
          subCtaText={'Wszystkie kolekcje'}
          bgColor={'#f7f4f2'}
          isFullWidth={true}
        />
        <Footer />
      </div>
    </>
  );
}
