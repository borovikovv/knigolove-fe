import clx from 'classnames';
import styles from './button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  styleType?: 'access' | 'original' | 'outline' | 'warn';
}

export function Button({ children, className, styleType = 'original', ...rest}: Props) {
  const buttonType = clx(
    styles[styleType],
  )

  return (
    <button
      {...rest}
      className={clx(className, styles.button, buttonType)}
    >
      {children}
    </button>
  )
}