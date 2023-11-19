import { useState } from 'react';
import styles from './Sizes.module.scss';

import RulerIcon from 'components/shared/Icons/RulerIcon';
import SizeButton from '../SizeButton/SizeButton';

export default function Sizes({ productSizes }) {
  const [pickedSize, setPickedSize] = useState('S');

  return (
    <div className={styles['product-size']}>
      <div className={styles['picked-size']}>Rozmiar: {pickedSize}</div>
      <div className={styles['size-buttons']}>
        {productSizes.map((size) => {
          return <SizeButton size={size} key={size.size} />;
        })}
      </div>
      <div className={styles['size-guide']}>
        <RulerIcon />
        Tabela Rozmiarów
      </div>
    </div>
  );
}
