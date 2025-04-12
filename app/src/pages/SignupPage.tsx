import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeToMarketing, setSubscribeToMarketing] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { signup, isAuthenticated } = useAuth();

  // If user is already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !username || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    try {
      setError('');
      setIsSubmitting(true);
      await signup(email, username, password);
      
      // If successful, we would also store the marketing preference
      if (subscribeToMarketing) {
        // In a real app, we would send this to the backend
        console.log('User opted into marketing emails:', email);
      }
    } catch (err) {
      setError('Failed to create an account. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 border-b-2 border-gray-400 pb-2 flex items-center">
          <span className="mr-2">👤</span>
          Create OpenDrive Account
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-sm mb-4 animate-slide-up">
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-700 bg-gray-100"
              required
            />
          </div>
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-700 bg-gray-100"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-700 bg-gray-100"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-700 bg-gray-100"
              required
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <input
                id="agree-terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms-of-service" className="text-blue-600 hover:underline" target="_blank">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-blue-600 hover:underline" target="_blank">
                  Privacy Policy
                </Link>
                , and I acknowledge the{' '}
                <Link to="/data-disclaimer" className="text-blue-600 hover:underline" target="_blank">
                  Data Disclaimer
                </Link>
                .
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="subscribe-marketing"
                type="checkbox"
                checked={subscribeToMarketing}
                onChange={(e) => setSubscribeToMarketing(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="subscribe-marketing" className="ml-2 block text-sm text-gray-700">
                Subscribe to receive product updates, news, and marketing emails from OpenDrive.
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="inline-block w-4 h-4 border-2 border-gray-100 border-t-transparent rounded-full animate-rotate mr-2"></span>
                Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-gray-800 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 