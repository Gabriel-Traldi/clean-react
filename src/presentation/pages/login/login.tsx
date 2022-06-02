import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'

import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

import { Authentication } from '@/domain/usecases'

import Styles from './login-styles.scss'

interface Props {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }) => {
  const navigate = useNavigate()

  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    mainError: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState(state => ({ ...state, isLoading: true }))

      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })

      localStorage.setItem('accessToken', account.accessToken)
      navigate('/', { replace: true })
    } catch (error) {
      setState(state => ({
        ...state,
        mainError: error.message,
        isLoading: false
      }))
    }
  }

  useEffect(() => {
    setState(state => ({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    }))
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>

      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />

          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>
          <Link to="/signup" role="link" className={Styles.link}>Criar conta</Link>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />

    </div>
  )
}

export default Login
