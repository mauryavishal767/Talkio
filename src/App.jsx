import Welcome from "./Pages/Welcome/Welcome"
import Home from "./Pages/Home/Home"
import Chat from "./Pages/Chat/Chat"

function App({path}) {
  return (
    <>
    {path === '/' && <Welcome/>}
    {path === '/home' && <Home/>}
    {path === '/chat' && <Chat/>}
    </>
  )
}

export default App
