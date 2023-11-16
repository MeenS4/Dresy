import styles from './FooterSections.module.scss';

export default function FooterSections({ title, sections }) {
  return (
    <div className={styles['section-type']}>
      <div className={styles['sections-title']}>{title}</div>
      <div className={styles['sections']}>
        {sections.map((section) => {
          return <div className={styles['section']}>{section}</div>;
        })}
      </div>
    </div>
  );
}
