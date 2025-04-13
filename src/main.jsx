import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextDataProvider from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ContextDataProvider>
        <App />
    </ContextDataProvider>
    </BrowserRouter>
)
