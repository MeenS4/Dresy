import styles from './ProductInfo.module.scss';
import { useState } from 'react';

import RulerIcon from 'components/shared/RulerIcon';
import SizeButton from '../SizeButton/SizeButton';

import materialPicture1 from 'resources/images/product-materials/material-red.jpg';
import materialPicture2 from 'resources/images/product-materials/material-green.jpg';
import materialPicture3 from 'resources/images/product-materials/material-black.jpg';
import materialPicture4 from 'resources/images/product-materials/material-blue.jpg';

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
  const [pickedSize, setPickedSize] = useState('S');

  return (
    <div className={styles['product-info']}>
      {/* Product title and price */}
      <div className={styles['product heading']}>
        <div className={styles['product-name']}>
          Zielone wzorzyste szorty casualowe
        </div>
        <div className={styles['product-price']}>Cena 99 PLN</div>
      </div>

      {/* Color variants buttons */}
      <div className={styles['product-variants']}>
        <div className={styles['picked-variant']}>Kolor: Zielony</div>
        <div className={styles['variants']}>
          {materialImages.map((image) => {
            return (
              <div className={styles['color']} key={image.id}>
                <img src={image.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>

      {/* Product sizes */}
      <div className={styles['product-size']}>
        <div className={styles['picked-variant']}>Rozmiar: {pickedSize}</div>
        <div className={styles['size-buttons']}>
          {sizes.map((size) => {
            return <SizeButton size={size} key={size.size} />;
          })}
        </div>
        <div className={styles['size-guide']}>
          <RulerIcon />
          Tabela Rozmiarów
        </div>
      </div>

      {/* CTA button (Add to Card) */}
      <div className={styles['add-to-cart-button']}>Dodaj do koszyka</div>
    </div>
  );
}
