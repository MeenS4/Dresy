import styles from './ProductInfo.module.scss';

import materialPicture1 from 'resources/images/product-materials/material-red.jpg';
import materialPicture2 from 'resources/images/product-materials/material-green.jpg';
import materialPicture3 from 'resources/images/product-materials/material-black.jpg';
import materialPicture4 from 'resources/images/product-materials/material-blue.jpg';

import Sizes from '../Sizes/Sizes';
import BaseCtaButton from 'shared/components/BaseButton/BaseCtaButton';
import ColorVariants from '../ColorVariants/ColorVariants';

const sizes = [
  {
    size: 'S',
    isPicked: false,
    isSoldOut: true,
  },
  {
    size: 'M',
    isPicked: true,
    isSoldOut: false,
  },
  {
    size: 'L',
    isPicked: false,
    isSoldOut: false,
  },
];

const materialImages = [
  {
    id: 'material1',
    image: materialPicture1,
  },
  {
    id: 'material2',
    image: materialPicture2,
  },
  {
    id: 'material3',
    image: materialPicture3,
  },
  {
    id: 'material4',
    image: materialPicture4,
  },
];

export default function ProductInfo() {
  function handleCtaButtonClick() {}

  return (
    <div className={styles['product-info']}>
      {/* Product title and price */}
      <div className={styles['product heading']}>
        <div className={styles['product-name']}>
          Zielone wzorzyste szorty casualowe
        </div>
        <div className={styles['product-price']}>Cena 99 PLN</div>
      </div>

      <ColorVariants materialImages={materialImages} />
      <Sizes productSizes={sizes} />
      <BaseCtaButton text={'Dodaj do koszyka'} onClick={handleCtaButtonClick} />
    </div>
  );
}
