import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SignUp } from '@/presentation/pages'

type Props = {
  makeLogin: ReactNode
}

const Router: React.FC<Props> = ({ makeLogin }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin} />
        <Route path="/signup" element={<SignUp validation={{} as any} addAccount={{} as any} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
