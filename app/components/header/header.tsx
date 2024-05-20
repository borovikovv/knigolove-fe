import Link from 'next/link';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Link className={styles.btn} href="/">
          Dashboard
        </Link>
        <div className='flex gap-6'>
          <Link className={styles.btn} href="/login">
            Log In
          </Link>
          <Link className={styles.btn} href="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}