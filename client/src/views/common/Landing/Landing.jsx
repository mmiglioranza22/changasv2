import React from 'react'
// import PropTypes from 'prop-types'
// import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'

const landingStyles = {
  backgroundColor: 'red'
}
const MyComponent = styled('div')({
  backgroundColor: 'blue'
})
// eslint-disable-next-line no-unused-vars
const Landing = props => {
  return (
    <MyComponent>Landing
    <Button>hola</Button>

    </MyComponent>
  )
}

Landing.propTypes = {
}

export default styled(Landing)(landingStyles)
