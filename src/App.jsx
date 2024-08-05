import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { Route, Routes } from 'react-router-dom'
import RestrictedRoute from './pages/components/RestrictedRoute/RestrictedRoute'
import PrivateRoute from './pages/components/PrivateRoute/PrivateRoute'
import Loader from './pages/components/Loader/Loader'
import Layout from './pages/components/Layout/Layout'


function App() {
  const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
  const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
  const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
  const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))

  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(refreshUser())
  }, [dispatch])
  
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Layout /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<RestrictedRoute/>}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
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
