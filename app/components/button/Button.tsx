import clx from 'classnames';
import styles from './button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ children, className, ...rest}: Props) {
  return (
    <button
      {...rest}
      className={clx(className, styles.button)}
    >
      {children}
    </button>
  )
}