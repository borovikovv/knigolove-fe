'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { useUser } from '@/app/providers/user-provider';

export function Header() {
  const { user } = useUser();

  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Link className={styles.btn} href="/">
          Dashboard
        </Link>
        {user ? (
          <div className='text-white'>{`Hi, ${user.first_name}`}</div>
        ) : (
          <div className="flex gap-6">
            <Link className={styles.btn} href="/login">
              Log In
            </Link>
            <Link className={styles.btn} href="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}