import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Switcher from './layout/Switcher'

function App () {
  // route settled for now to work on landing.
  // final design will take into account Loadable and lazy loading for different views
  return (
    <Switcher />
  )
}

export default App
