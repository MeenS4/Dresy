import DresyLogoIcon from '../shared/DresyLogoIcon';
import ShoppingCartIcon from '../shared/ShoppingCartIcon';
import './Navbar.scss';

export default function Navbar() {
  const cartItemsAmount = 1;

  return (
    <nav>
      <div className='logo'>
        <DresyLogoIcon />
      </div>
      <div className='nav-buttons'>
        <div className='text accent'>Wyprzedaż Do -20%</div>
        <div className='text'>Nowości</div>
        <div className='text'>Kobieta</div>
      </div>
      <div className='cart'>
        <ShoppingCartIcon />
        <div className='text'>Koszyk</div>
        <div className='cart-items-notif'>{cartItemsAmount}</div>
      </div>
    </nav>
  );
}
