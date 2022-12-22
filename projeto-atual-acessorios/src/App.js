import React from 'react'
import { GlobalStyle } from './Global/index'
import {BrowserRouter} from 'react-router-dom'
import Rotas from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas/>
    </BrowserRouter>
  )
}
