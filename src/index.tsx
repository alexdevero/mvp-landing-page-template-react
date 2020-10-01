import React from 'react'
import { render } from 'react-dom'

// Import homepage
import { Homepage } from './homepage'

// Import styles
import './styles/styles.css'

const rootElement = document.getElementById('root')

render(<Homepage />, rootElement)
