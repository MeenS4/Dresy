import styles from './Description.module.scss';

const content = {
  productDesc: `Ten kombinezon w jasnoniebieskim kolorze jest idealnym wyborem na
  różne okazje. Posiada krótkie rękawy i kopertowy dekolt, co nadaje
  mu elegancki wygląd. Długość do połowy łydki sprawia, że jest to
  doskonały wybór zarówno na codzienne wyjścia, jak i do pracy. Gładki
  wzór oraz brak zapięcia dodatkowo podkreślają jego prostotę.
  Wykonany z poliestru, ten kombinezon jest trwały i przyjemny w
  dotyku. Dodatkowy pasek umożliwia dostosowanie go do swojego gustu i
  sylwetki.`,
  productCare: `Skład materiału to 98% bawełna, 2% elastan. Jeśli chodzi o
  pielęgnację, to produkt można prać w pralce w temperaturze 30°C.`,
};

export default function Description() {
  return (
    <div className={styles['description']}>
      <div className={styles['product-desc']}>
        <div className={styles['desc-title']}>Opis produktu</div>
        <div className={styles['desc']}>{content.productDesc}</div>
        <div className={styles['desc-title']}>Skład i pielęgnacja</div>
        <div className={styles['desc']}>{content.productCare}</div>
      </div>
    </div>
  );
}

