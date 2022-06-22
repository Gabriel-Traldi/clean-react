import React from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from '@/presentation/components'

import { makeLogin as MakeLogin } from './factories/pages/login/login-factory'
import { makeSignUp as MakeSignUp } from './factories/pages/signup/signup-factory'

import '@/presentation/styles/global.scss'

const rootElement = document.getElementById('main')
const root = createRoot(rootElement)

root.render(
  <Router
    makeLogin={<MakeLogin />}
    makeSignUp={<MakeSignUp />}
  />
)
