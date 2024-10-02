import './app.scss'
import Home from "./Pages/Home/Home"
import Chat from "./Pages/Chat/Chat"
import Connect from './Pages/Connect/Connect'

function App({path}) {
  return (
    <div className="app-container">
      {path === '/' && <Connect/>}
      {path === '/home' && <Home/>}
      {path === '/chat' && <Chat/>}
    </div>
  )
}

export default App
