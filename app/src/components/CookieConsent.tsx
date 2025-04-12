import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented to cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Only show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleReject = () => {
    // Still record that the user has made a choice
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    
    // Could disable non-essential cookies here
    // For now, we'll just close the banner
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50 animate-fade-in">
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm md:text-base">
            We use cookies to enhance your experience on our site. By continuing to use OpenDrive, 
            you agree to our use of cookies as described in our{' '}
            <Link to="/privacy-policy" className="underline hover:text-blue-300">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleReject}
            className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-sm transition-colors"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 rounded-sm transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 