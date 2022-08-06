import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import Landing from '../views/common/Landing/Landing'

/**
 * Switcher redirects to different routes, depending which app is being used
 * TODO: reducer injected when/ and where? before or after switcher
 * Landing -> /, /login /logout redirects
 * Sign in -> /sign_in
 * Home -> /home
 * Forbidden -> /unauthorized
 * Error -> /notfound , / * wildcard
 * Profile -> /profile
 * About -> /about

*/
const Switcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>

  )
}

Switcher.propTypes = {
}

export default Switcher
