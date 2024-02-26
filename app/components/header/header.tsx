import Link from 'next/link';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Link className={styles.btn} href="/">
          Dashboard
        </Link>
        <Link className={styles.btn} href="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}