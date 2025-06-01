import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/reset.css'
import '../styles/imports.css'
import '../styles/setup.css'
import '../styles/base.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import App from './App'

if (import.meta.env.DEV) {
  const { worker } = await import('../api/api.mock.browser')
  await worker.start()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
