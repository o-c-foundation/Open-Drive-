import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import MyUploadsPage from './pages/MyUploadsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SubscriptionPage from './pages/SubscriptionPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import DataDisclaimerPage from './pages/DataDisclaimerPage'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { AuthGuard } from './components/AuthGuard'
import { UserMenu } from './components/UserMenu'
import CookieConsent from './components/CookieConsent'

// Gradient background animation style
const gradientBackground = {
  background: 'linear-gradient(-45deg, #a8d8ff, #d5e6ff, #cffdff, #e0f0ff, #c9e4ff, #d6f8ff)',
  backgroundSize: '400% 400%',
  animation: 'gradient 30s ease infinite',
};

// Define the animation in a style element
const gradientAnimation = `
  @keyframes gradient {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={gradientBackground}>
      <style>{gradientAnimation}</style>
      <nav className="navbar">
        <div className="flex items-center">
          <img 
            src="https://bafkreihge6rx6ykdcdmspwvh4oweojqsvzoyhjgqp6yfqkgo2b45l27auq.ipfs.w3s.link/" 
            alt="OpenDrive Logo" 
            className="site-logo mr-2 md:mr-4 pixelated w-14 h-14 md:w-20 md:h-20" 
          />
          <div className="font-bold text-xl md:text-2xl animate-fade-in">OpenDrive</div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300 text-lg transition-transform hover:scale-105">Home</Link>
          <Link to="/upload" className="hover:text-gray-300 text-lg transition-transform hover:scale-105">Upload</Link>
          <Link to="/my-uploads" className="hover:text-gray-300 text-lg transition-transform hover:scale-105">My Uploads</Link>
          <Link to="/subscription" className="hover:text-gray-300 text-lg transition-transform hover:scale-105">Plans</Link>
          <UserMenu />
        </div>
      </nav>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-3 shadow-md transition-all">
          <div className="flex flex-col space-y-4 pb-2">
            <Link 
              to="/" 
              className="hover:text-gray-300 text-lg py-2 border-b border-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/upload" 
              className="hover:text-gray-300 text-lg py-2 border-b border-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload
            </Link>
            <Link 
              to="/my-uploads" 
              className="hover:text-gray-300 text-lg py-2 border-b border-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Uploads
            </Link>
            <Link 
              to="/subscription" 
              className="hover:text-gray-300 text-lg py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plans
            </Link>
            <div className="pt-2 pb-1">
              <UserMenu />
            </div>
          </div>
        </div>
      )}
      
      <div className="app-container animate-fade-in">
        {children}
      </div>
      <footer className="bg-gray-800 text-gray-100 p-4 text-center mt-12 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-4 space-x-2 md:space-x-4">
            <a href="https://github.com/opencryptofoundation/opendrive" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <span className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </span>
            </a>
            <a href="https://t.me/opencryptofoundation" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <span className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.368c-.126.568-.466.711-.943.443l-2.618-1.932-1.263 1.216c-.139.139-.259.259-.53.259-.272 0-.226-.103-.318-.363l-.716-2.355-2.631-.786c-.57-.176-.582-.57.126-.842l10.289-3.968c.467-.194.891.114.574.96z" />
                </svg>
                Telegram
              </span>
            </a>
            <a href="mailto:contact@opencryptofoundation.org" className="hover:text-gray-300 transition-colors">
              <span className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link to="/data-disclaimer" className="hover:text-gray-300 transition-colors">Data Disclaimer</Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">© 2025 OpenDrive by The Open Crypto Foundation - Decentralized Storage Platform</p>
        </div>
      </footer>
      <CookieConsent />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/data-disclaimer" element={<DataDisclaimerPage />} />
          <Route 
            path="/upload" 
            element={
              <AuthGuard>
                <UploadPage />
              </AuthGuard>
            } 
          />
          <Route 
            path="/my-uploads" 
            element={
              <AuthGuard>
                <MyUploadsPage />
              </AuthGuard>
            } 
          />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App 