import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { boot } from 'os-core'

const bootMessage: string = boot()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>{bootMessage}</div>
    <App />
  </React.StrictMode>,
)
