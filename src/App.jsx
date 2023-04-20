import Login from './pages/Login.jsx'
import Chatroom from './pages/Chatroom.jsx'
import NavBar from './Components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './Routes/PrivateRoutes.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'


function App() {
  return (
    <AuthProvider>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<PrivateRoute >
          <Chatroom />
        </PrivateRoute>} />
      </Routes>

    </AuthProvider>
  )
}

export default App
