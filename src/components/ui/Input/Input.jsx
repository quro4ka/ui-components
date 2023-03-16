import cn from 'classnames'
import styles from './Input.module.scss'

export const Input = (props) => {
  const { mode } = props

  const handleMode = () => {
    let baseStyles = cn(styles.input)

    // console.log('mode', mode)

    if (mode === 'pink') {
      return cn(baseStyles, styles.input__pink)
    }

    if (mode === 'dark') {
      return cn(baseStyles, styles.input__dark)
    }

    return baseStyles
  }

  // onChange={props.onChange}

  return <input className={handleMode()} {...props} />
}
