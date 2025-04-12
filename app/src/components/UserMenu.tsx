import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function UserMenu() {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link to="/login" className="btn-secondary text-xs md:text-sm py-1 px-2 md:px-3">
          Sign In
        </Link>
        <Link to="/signup" className="btn-primary text-xs md:text-sm py-1 px-2 md:px-3">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center space-x-2 p-1 md:p-2 rounded-sm hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-500 rounded-sm flex items-center justify-center text-white font-bold">
          {currentUser?.username.slice(0, 1).toUpperCase()}
        </div>
        <span className="hidden md:inline">{currentUser?.username}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-100 border-2 border-gray-400 rounded-sm shadow-md z-10">
          <div className="p-3 border-b border-gray-300">
            <p className="font-bold text-gray-800">{currentUser?.username}</p>
            <p className="text-xs text-gray-600 truncate">{currentUser?.email}</p>
          </div>
          <div className="p-2">
            <Link 
              to="/my-uploads" 
              className="block px-4 py-2 text-sm hover:bg-gray-200 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              My Uploads
            </Link>
            <Link 
              to="/subscription" 
              className="block px-4 py-2 text-sm hover:bg-gray-200 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-1">⭐</span>
                Subscription Plans
              </span>
            </Link>
            <button 
              onClick={() => {
                logout();
                setIsOpen(false);
              }} 
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200 rounded-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 