import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New from './new.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <p>Hello test</p>
    <New/>

  </>
)
