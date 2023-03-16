import { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { FromHint } from './FromHint'
import cn from 'classnames'
import styles from './Form.module.scss'

export const Form = ({ mode = '', setFormData, title = 'Form' }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)

  const [emailError, setEmailError] = useState('Email cannot be empty')
  const [passwordError, setPasswordError] = useState('Password cannot be empty')

  const [formvalid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const handleMode = () => {
    let baseStyles = cn(styles.form)

    if (mode === 'pink') {
      return cn(baseStyles, styles.form__pink)
    }

    if (mode === 'dark') {
      return cn(baseStyles, styles.form__dark)
    }

    return baseStyles
  }

  const onEmail = (e) => {
    setEmail(e.target.value)

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email is incorrect')

      if (!e.target.value) {
        setEmailError('Email cannot be empty')
      }
    } else {
      setEmailError('')
    }
  }

  const onPassword = (e) => {
    setPassword(e.target.value)

    if (e.target.value.length < 5 || e.target.value.length > 30) {
      setPasswordError('Password must be longer than 5 characters')

      if (!e.target.value) {
        setPasswordError('Password cannot be empty')
      }
    } else {
      setPasswordError('')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (email && password) {
      console.log({
        email,
        password,
      })

      setFormData({
        email,
        password,
      })

      setEmail('')
      setPassword('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  return (
    <form onSubmit={onSubmit} className={handleMode()}>
      <h1 className={styles.form__title}>{title}</h1>
      <div className={styles.inputs}>
        <Input
          onBlur={blurHandler}
          onChange={onEmail}
          value={email}
          placeholder="enter your name"
          type="text"
          name="email"
          mode={mode}
        />
        {emailDirty && emailError && <FromHint err={emailError} />}
        <Input
          onBlur={blurHandler}
          onChange={onPassword}
          value={password}
          placeholder="enter your password"
          type="text"
          name="password"
          mode={mode}
        />
        {passwordDirty && passwordError && <FromHint err={passwordError} />}
      </div>
      <Button disabled={!formvalid} mode={mode}>
        login
      </Button>
    </form>
  )
}
