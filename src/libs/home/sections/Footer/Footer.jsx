import FooterInfo from 'libs/home/components/FooterInfo/FooterInfo';
import FooterSections from 'libs/home/components/FooterSections/FooterSections';
import styles from './Footer.module.scss';

export default function Footer() {
  const titles = ['Pomocy', 'Sklep', 'Media'];
  const sections = [
    ['FAQ', 'Polityka Prywatności', 'Regulamin', 'Zwroty'],
    ['Wyprzedaż', 'Bestsellery', 'Nowa kolekcja', 'Produkty'],
    ['Facebook', 'Instagram', 'Tiktok', 'Twitter'],
  ];

  return (
    <div className={styles['footer']}>
      <FooterInfo />
      <div className={styles['footer-sections']}>
        <FooterSections title={titles[0]} sections={sections[0]} />
        <FooterSections title={titles[1]} sections={sections[1]} />
        <FooterSections title={titles[2]} sections={sections[2]} />
      </div>
    </div>
  );
}
