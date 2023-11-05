import './HeroContent.scss';

import ProductPictures from './components/ProductPictures';
import ProductInfo from './components/ProductInfo';

const productDesc = `Ten kombinezon w jasnoniebieskim kolorze jest idealnym wyborem na
różne okazje. Posiada krótkie rękawy i kopertowy dekolt, co nadaje
mu elegancki wygląd. Długość do połowy łydki sprawia, że jest to
doskonały wybór zarówno na codzienne wyjścia, jak i do pracy. Gładki
wzór oraz brak zapięcia dodatkowo podkreślają jego prostotę.
Wykonany z poliestru, ten kombinezon jest trwały i przyjemny w
dotyku. Dodatkowy pasek umożliwia dostosowanie go do swojego gustu i
sylwetki.`;

const productCare = `Skład materiału to 98% bawełna, 2% elastan. Jeśli chodzi o
pielęgnację, to produkt można prać w pralce w temperaturze 30°C.`;

export default function HeroContent() {
  return (
    <div className='content'>
      <ProductPictures />
      <ProductInfo />
      <div className='description'>
        <div className='product-desc'>
          <div className='desc-title'>Opis produktu</div>
          <div className='desc'>{productDesc}</div>
          <div className='desc-title'>Skład i pielęgnacja</div>
          <div className='desc'>{productCare}</div>
        </div>
      </div>
      <div className='fill'></div>
    </div>
  );
}
