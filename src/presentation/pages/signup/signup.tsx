import React, { useEffect, useState } from 'react'

import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'

import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

import { AddAccount } from '@/domain/usecases'

import Styles from './signup-styles.scss'

interface Props {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<Props> = ({ validation, addAccount }) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmation: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (state.isLoading) {
      return
    }
    setState(state => ({ ...state, isLoading: true }))
    await addAccount.add({
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation
    })
  }

  useEffect(() => {
    setState(state => ({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation)
    }))
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  return (
    <div className={Styles.signup}>

      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form data-testId="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Criar conta</h2>

          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />

          <button data-testid="submit" disabled={!!state.nameError || !!state.emailError || !!state.passwordError || !!state.passwordConfirmationError} className={Styles.submit} type="submit">Entrar</button>
          <span role="link" className={Styles.link}>Voltar Para Login</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />

    </div>
  )
}

export default SignUp
