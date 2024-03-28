import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import { GlobalStateProvider } from './context/count.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStateProvider>,
)
