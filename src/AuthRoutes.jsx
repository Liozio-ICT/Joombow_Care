import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './provders/AuthProvider'

const AuthRoute = () => {
    const { isAuthenticated } = useAuth()

    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />
}

export default AuthRoute
