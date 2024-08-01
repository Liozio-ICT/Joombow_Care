import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './provders/AuthProvider'

const AuthRoute = () => {
    const { isAuthenticated } = useAuth()

    return !isAuthenticated ? <Outlet /> : <Navigate to="/user" />
}

export default AuthRoute
