import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TemaProvider } from './Contexts/TemaContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TemaProvider>
    <App />
  </TemaProvider>,
)
