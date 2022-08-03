import React from 'react'
import PropTypes from 'prop-types'

const Landing = props => {
  return (
    <div>Landing {props}</div>
  )
}

Landing.propTypes = {
  props: PropTypes.object.isRequired
}

export default Landing
