import { CssBaseline, CssVarsProvider } from '@mui/joy'
import './App.css'
import Routes from './Routes/Routes'
import { HashRouter } from 'react-router-dom'

function App() {
  
  return (
    <HashRouter>
    <CssVarsProvider>
    <CssBaseline />
      <Routes />
    </CssVarsProvider>
    </HashRouter>
  )
}

export default App
