import './app.scss'
import Welcome from "./Pages/Welcome/Welcome"
import Home from "./Pages/Home/Home"
import Chat from "./Pages/Chat/Chat"

function App({path}) {
  return (
    <div className="app-container">
      {path === '/' && <Welcome/>}
      {path === '/home' && <Home/>}
      {path === '/chat' && <Chat/>}
    </div>
  )
}

export default App
