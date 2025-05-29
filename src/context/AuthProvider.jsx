import React from 'react'
import { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage();
        setUserData(employees)
        }, [])
    
// localStorage.clear()    
  return (
    
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider