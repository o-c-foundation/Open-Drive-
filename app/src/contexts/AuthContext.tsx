import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('opendrive_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function - in a real app, this would make an API call
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, create a mock user
    const user = {
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      email,
      username: email.split('@')[0]
    };
    
    setCurrentUser(user);
    localStorage.setItem('opendrive_user', JSON.stringify(user));
    setIsLoading(false);
  };

  // Mock signup function - in a real app, this would make an API call
  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, create a mock user
    const user = {
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      email,
      username
    };
    
    setCurrentUser(user);
    localStorage.setItem('opendrive_user', JSON.stringify(user));
    setIsLoading(false);
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('opendrive_user');
  };

  const value = {
    currentUser,
    isLoading,
    login,
    signup,
    logout,
    isAuthenticated: !!currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
} 