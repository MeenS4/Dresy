import './Hero.scss';

import HeroDirectory from './components/HeroDirectory/HeroDirectory';
import HeroContent from './components/HeroContent/HeroContent';

export default function Hero() {
  return (
    <div className='hero'>
      <HeroDirectory />
      <HeroContent />
    </div>
  );
}
