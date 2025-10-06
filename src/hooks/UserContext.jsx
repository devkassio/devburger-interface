import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const putUser = (user) => {
    setUser(user);

    localStorage.setItem('devburguer:user', JSON.stringify(user));
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem('devburguer:user');
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('devburguer:user');

    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, putUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
