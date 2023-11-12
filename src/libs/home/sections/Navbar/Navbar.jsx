import DresyLogoIcon from 'components/shared/DresyLogoIcon';
import ShoppingCartIcon from 'components/shared/ShoppingCartIcon';
import styles from './Navbar.module.scss';
import classNames from 'classnames';

export default function Navbar() {
  const cartItemsAmount = 1;

  const saleClasses = classNames(styles['text'], {
    [styles['accent']]: true,
  });

  return (
    <nav>
      <div className={styles['logo']}>
        <DresyLogoIcon />
      </div>
      <div className={styles['nav-buttons']}>
        <div className={saleClasses}>Wyprzedaż Do -20%</div>
        <div className={styles['text']}>Nowości</div>
        <div className={styles['text']}>Kobieta</div>
      </div>
      <div className={styles['cart']}>
        <ShoppingCartIcon />
        <div className={styles['text']}>Koszyk</div>
        <div className={styles['cart-items-notif']}>{cartItemsAmount}</div>
      </div>
    </nav>
  );
}
