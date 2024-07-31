import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { refreshUser } from './redux/auth/operations'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PublicRoute from './components/PublicRoute/PublicRoute'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Loader from './components/Loader/Loader'


function App() {
  const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
  const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
  const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
  const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))

  // const dispatch = useDispatch();

  // useEffect(() => {
  //       dispatch(refreshUser())
  // }, [dispatch])
  
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute/>}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>      
        </Routes>
      </Suspense>
    </>
  )
}

export default App
