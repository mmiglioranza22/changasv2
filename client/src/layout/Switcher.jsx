import React from 'react'
// import PropTypes from 'prop-types'

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

const Switcher = props => {
  return (
    <div>Switcher{props}</div>
  )
}

Switcher.propTypes = {
}

export default Switcher
