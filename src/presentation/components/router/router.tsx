import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

interface Factory {
  makeLogin: ReactNode
  makeSignUp: ReactNode
}

const Router: React.FC<Factory> = ({ makeLogin, makeSignUp }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin} />
        <Route path="/signup" element={makeSignUp}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
