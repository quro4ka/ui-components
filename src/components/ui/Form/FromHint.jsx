// import cn from 'class'
import styles from './Form.module.scss'

export const FromHint = (props) => {
  const { err } = props

  return <p className={styles.form__hint + ' ' + styles.active}>{err}</p>
}
