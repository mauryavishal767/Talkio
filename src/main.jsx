import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<App path='/'/>}/>
        <Route path= '/home' element={<App path= '/home'/>}/>
        <Route path= '/chat' element={<App path= '/chat'/>}/>
      </Routes>
    </BrowserRouter>
)
