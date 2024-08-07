import { createContext, useContext, useState, ReactNode } from "react";
import React from 'react';

// Define the shape of the user and the context
interface User {
    // Define your user properties here
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
}

interface AuthContextType {
    user: User | null;
    setAuth: (authUser: User) => void;
    setUserData: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    const setAuth = (authUser: User) => {
        setUser(authUser);
    };

    const setUserData = (userData: Partial<User>) => {
        setUser((prevUser:any) => prevUser ? { ...prevUser, ...userData } : null);
    };

    return (
        <AuthContext.Provider value={{ user, setAuth, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
