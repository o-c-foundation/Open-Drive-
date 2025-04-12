import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Show loading state while checking authentication
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-t-2 border-b-2 border-gray-600 rounded-full animate-spin mb-3"></div>
          <p className="text-sm text-gray-500">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the protected route
  return <>{children}</>;
} 