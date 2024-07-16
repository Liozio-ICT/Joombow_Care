import { useContext, createContext, useEffect, useState } from 'react'
import apiClient from '../utils/apiClient'
import { ToastContainer } from 'react-toastify'

const AuthContext = createContext({
    login: (token = '', userData = {}) => {
        console.log({ token, userData })
        console.log('login')
    },
    logout: async () => {
        let errors;
        return {
            errors,
            message: '',
            done: false
        }
    },
    isAuthenticated: false,
    user: {} || null,
    updateUser: (data) => { return data || null },
    getUserData: async () => { return {} }
})

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("auth_token"))
    const [isAuthenticated, setIsAuthenticated] = useState(!!token)
    const [user, setUser] = useState({} || null)


    const login = (token, userData) => {
        localStorage.setItem('auth_token', token ?? null)
        localStorage.setItem('user', userData ? JSON.stringify(userData) : null)
        setIsAuthenticated(true)
        setToken(token)
        setUser(userData)
    }

    const logout = async () => {
        // api request to logout
        const response = await apiClient.get('/user/logout')
        if (response.ok || response.status === 401) {
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')
            setIsAuthenticated(false)
            setToken()
            setUser()
        }
        const { errors, message } = await response.json()

        return {
            errors, message, done: response.ok
        }
    }

    const getUserData = async () => {
        // api request to get current user
        const response = await apiClient.get('/user/me')

        if (response.ok) {
            const data = await response.json()
            localStorage.setItem('user', data ? JSON.stringify(data) : null)
            setUser(data)

            return data
        }
        return null
    }

    const updateUser = async (data) => {

        try {

            localStorage.setItem('user', data ? JSON.stringify(data) : null)
            setUser(data)

            return data
        } catch (error) {
            console.error(error)
            return null
        }

    }


    useEffect(() => {
        const t = localStorage.getItem("auth_token")
        if (t !== token) {
            setToken(t)
        }
        try {
            const u = localStorage.getItem("user")
            setUser(!u ? u : JSON.parse(u))
        } catch (error) {
            console.error(error)
        }
        setIsAuthenticated(!!token)

        console.log({ isAuthenticated })
    }, [token, isAuthenticated])

    return (
        <AuthContext.Provider value={{ login, logout, isAuthenticated, user, getUserData, updateUser }}>
            {children}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
