import { Provider } from 'react-redux'
import { store } from '../store/store'
import '@i18n'
import { useState } from 'react'
import AppInitializer from './AppInitializer'
import { FullScreenLoader } from '@features/fullscreen-loader'
import AppRouter from '../router/AppRouter'
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Provider store={store}>
      <AppInitializer onLoaded={() => setIsLoaded(true)} />
      <FullScreenLoader isLoaded={isLoaded} />
      <AppRouter isLoaded={isLoaded} />
    </Provider>
  )
}

export default App
