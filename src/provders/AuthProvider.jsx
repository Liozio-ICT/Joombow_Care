import { useContext, createContext, useEffect, useState } from 'react'
import apiClient from '../utils/apiClient'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

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
    useUser: () => ({} || null),
    token: '' || null,
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

    const clearData = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
        setIsAuthenticated(false)
        setToken()
        setUser()
    }

    const logout = async () => {
        try {
            // api request to logout
            const { message, error } = await apiClient.get('user/logout').json()

        } catch (error) {
            console.error(error)
        }
        finally {
            clearData()
        }
    }

    const getUserData = async () => {
        try {
            // api request to get current user
            const data = await apiClient.get('user/me').json()

            updateUser(data)
            return data

        } catch (error) {
            console.error(error)
        }
        return null
    }

    const updateUser = (data) => {
        try {
            localStorage.setItem('user', data ? JSON.stringify(data) : null)
            setUser(data)
            return data
        } catch (error) {
            console.error(error)
            return null
        }
    }

    const useUser = () => user

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
        if (token && t !== token)
            getUserData()
        setIsAuthenticated(!!token)

    }, [token, isAuthenticated])

    return (
        <AuthContext.Provider value={{ login, logout, isAuthenticated, user, token, getUserData, updateUser, useUser }}>
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
