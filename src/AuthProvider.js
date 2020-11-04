import React from 'react';

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [authed, setAuthed] = React.useState(false);

  const login = () => {
    setAuthed(true)
  }

  const logout = () => {
    setAuthed(false)
  }

  return <AuthContext.Provider value={{ authed, login, logout }}>
    {children}
  </AuthContext.Provider>
}

export const useAuthContext = () => React.useContext(AuthContext)