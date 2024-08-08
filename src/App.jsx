import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { Route, Routes } from 'react-router-dom'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Layout from './components/Layout/Layout'
import Loader from './components/Loader/Loader'


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
        <Layout>
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
        </Layout> 
      </Suspense>
    </>
  )
}

export default App
