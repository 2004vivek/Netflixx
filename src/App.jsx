import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import { Toaster } from 'react-hot-toast'
import Signup from './components/Signup'
function App() {
  return (
    <>
     <Toaster position="top-center"/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}
export default App
