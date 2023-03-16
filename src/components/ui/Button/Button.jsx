import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, ...props }) => {
  const { mode } = props

  const handleMode = () => {
    let baseStyles = cn(styles.btn)

    if (mode === 'pink') {
      return cn(baseStyles, styles.btn__pink)
    }

    if (mode === 'dark') {
      return cn(baseStyles, styles.btn__dark)
    }

    return baseStyles
  }

  return (
    <button className={handleMode()} {...props}>
      {children}
    </button>
  )
}
