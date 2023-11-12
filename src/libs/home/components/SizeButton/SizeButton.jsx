import classNames from 'classnames';
import styles from './SizeButton.module.scss';

export default function SizeButton({ size }) {
  const classes = classNames(styles['size-button'], {
    [styles['size-picked']]: size.isPicked,
    [styles['size-sold-out']]: size.isSoldOut,
  });

  return <div className={classes}>{size.size}</div>;
}
