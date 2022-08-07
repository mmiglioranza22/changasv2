import React from 'react'
// import PropTypes from 'prop-types'
// import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import styles from './Landing.module.css'

import Button from '@mui/material/Button'

const landingStyles = {
  backgroundColor: 'red'
}
const MyComponent = styled('div')({
  backgroundColor: 'blue'
})
// create color gradient
// center div with logo
// nice typo for Changas
// make animation *appears on face, to the right. more text on left appears
// markup for signup template
// eslint-disable-next-line no-unused-vars
const Landing = props => {
  return (
    <MyComponent className={styles.root}>Landing
    <Button>hola</Button>

    </MyComponent>
  )
}

Landing.propTypes = {
}

export default styled(Landing)(landingStyles)
