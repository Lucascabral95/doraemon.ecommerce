import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Body from './Routes/RutasPrivadas.jsx'
"bootstrap/scss/bootstrap";
'react-select/dist/react-select.css'
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Body />

    </BrowserRouter>

  </React.StrictMode>,
)
