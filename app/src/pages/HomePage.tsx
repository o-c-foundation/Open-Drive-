import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="space-y-8 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 border-b-2 border-gray-400 pb-2">Welcome to OpenDrive</h1>
        <p className="text-gray-700 mb-6">
          OpenDrive is a decentralized storage platform by The Open Crypto Foundation built on IPFS technology.
          Store your files securely across a distributed network with content-based addressing and cryptographic verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card animate-slide-up stagger-item">
          <div className="pixelated text-4xl mb-2 animate-float">📁</div>
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-1">Upload Files</h3>
          <p className="text-gray-600 mb-4">Store your files on the decentralized web with permanent addressing and cryptographic security.</p>
          <Link to="/upload" className="btn-primary inline-block">Upload Files</Link>
        </div>
        
        <div className="card animate-slide-up stagger-item">
          <div className="pixelated text-4xl mb-2 animate-float">🔍</div>
          <h3 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-1">View Uploads</h3>
          <p className="text-gray-600 mb-4">Access and manage your previously uploaded files and data with our intuitive interface.</p>
          <Link to="/my-uploads" className="btn-primary inline-block">My Uploads</Link>
        </div>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Storage Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="text-center p-4 border border-gray-300 rounded-sm bg-white animate-slide-up stagger-item">
            <div className="font-bold text-xl mb-1">Basic</div>
            <div className="text-3xl font-bold mb-3">Free</div>
            <div className="text-gray-700 mb-1">5GB Storage</div>
            <div className="text-xs text-gray-500 mb-4">Perfect for personal use</div>
          </div>
          <div className="text-center p-4 border-2 border-blue-500 rounded-sm bg-white relative animate-slide-up stagger-item animate-pulse">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs py-1 px-2">
              Popular
            </div>
            <div className="font-bold text-xl mb-1">Standard</div>
            <div className="text-3xl font-bold mb-3">$12.99</div>
            <div className="text-gray-700 mb-1">100GB Storage</div>
            <div className="text-xs text-gray-500 mb-4">For serious storage needs</div>
          </div>
          <div className="text-center p-4 border border-gray-300 rounded-sm bg-white animate-slide-up stagger-item">
            <div className="font-bold text-xl mb-1">Professional</div>
            <div className="text-3xl font-bold mb-3">$49.99</div>
            <div className="text-gray-700 mb-1">1TB Storage</div>
            <div className="text-xs text-gray-500 mb-4">For professionals & teams</div>
          </div>
          <div className="text-center p-4 border border-gray-300 rounded-sm bg-white animate-slide-up stagger-item">
            <div className="font-bold text-xl mb-1">Enterprise</div>
            <div className="text-3xl font-bold mb-3">$199.99</div>
            <div className="text-gray-700 mb-1">5TB Storage</div>
            <div className="text-xs text-gray-500 mb-4">Ultimate storage solution</div>
          </div>
        </div>
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/subscription" className="btn-primary inline-block px-8 animate-pulse">View All Plans</Link>
        </div>
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Why OpenDrive?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item">
            <div className="font-bold mb-1">📌 Content-addressed</div>
            <p className="text-sm text-gray-600">Files are identified by their content, not location, ensuring authenticity and preventing tampering.</p>
          </div>
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item">
            <div className="font-bold mb-1">🔒 Secure</div>
            <p className="text-sm text-gray-600">Your files are stored across a distributed network, protected by advanced cryptography from The Open Crypto Foundation.</p>
          </div>
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item">
            <div className="font-bold mb-1">⚡ Resilient</div>
            <p className="text-sm text-gray-600">No central point of failure means your data remains accessible even in challenging network conditions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 