import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Formulario from './components/Formulario.jsx'
import NavigateRoutes from './NavigateRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigateRoutes />
  </StrictMode>,
)
