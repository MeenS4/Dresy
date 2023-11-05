import './ProductInfo.scss';

import RulerIcon from 'components/shared/RulerIcon';

import materialPicture1 from 'resources/images/product-materials/material-red.jpg';
import materialPicture2 from 'resources/images/product-materials/material-green.jpg';
import materialPicture3 from 'resources/images/product-materials/material-black.jpg';
import materialPicture4 from 'resources/images/product-materials/material-blue.jpg';
import { useState } from 'react';

const materialImages = [
  materialPicture1,
  materialPicture2,
  materialPicture3,
  materialPicture4,
];

export default function ProductInfo() {
  const [pickedSize, setPickedSize] = useState('S');

  return (
    <div className='product-info'>
      {/* Product title and price */}
      <div className='product heading'>
        <div className='product-name'>Zielone wzorzyste szorty casualowe</div>
        <div className='product-price'>Cena 99 PLN</div>
      </div>

      {/* Color variants buttons */}
      <div className='product-variants'>
        <div className='picked-variant'>Kolor: Zielony</div>
        <div className='variants'>
          {materialImages.map((image) => {
            return (
              <div className='color'>
                <img src={image} alt='' />
              </div>
            );
          })}
        </div>
      </div>

      {/* Product sizes */}
      <div className='product-size'>
        <div className='picked-variant'>Rozmiar: {pickedSize}</div>
        <div className='size-buttons'>
          <div className='size-button size-sold-out'>S</div>
          <div className='size-button size-picked'>M</div>
          <div className='size-button'>L</div>
        </div>
        <div className='size-guide'>
          <RulerIcon />
          Tabela Rozmiarów
        </div>
      </div>

      {/* CTA button (Add to Card) */}
      <div className='add-to-cart-button'>Dodaj do koszyka</div>
    </div>
  );
}
