import { BrowserRouter } from 'react-router-dom'
import Nav from './Components/Nav'
import Routes from './Routes/Routers'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes />  
    </BrowserRouter>
    </>
  )
}

export default App
