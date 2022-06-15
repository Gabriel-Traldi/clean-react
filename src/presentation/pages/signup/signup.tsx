import React from 'react'
import { Link } from 'react-router-dom'

import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './signup-styles.scss'

const SignUp: React.FC = () => {
  return (
    <div className={Styles.signup}>

      <LoginHeader />

      <Context.Provider value={{ state: {} }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>

          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="password" placeholder="Repita sua senha" />

          <button className={Styles.submit} type="submit">Entrar</button>
          <Link to="/login" role="link" className={Styles.link}>Voltar Para Login</Link>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />

    </div>
  )
}

export default SignUp
