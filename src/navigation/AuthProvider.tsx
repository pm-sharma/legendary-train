import React, {useState, createContext} from 'react';

export const AuthContext = createContext<any>({} as any);

interface AuthI {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthI) => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
