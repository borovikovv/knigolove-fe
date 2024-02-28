import clx from 'classnames';
import styles from './input.module.css';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...rest }: Props) {
  return (
    <input
      {...rest}
      className={clx(className, styles.input)}
    />
  )
}