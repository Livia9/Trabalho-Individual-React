import styles from './button.module.css'

export function Button({ type, onClick, className, title, children }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children || title}
    </button>
  );
}
