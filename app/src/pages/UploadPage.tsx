import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UploadPage() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadResult, setUploadResult] = useState<{ cid: string } | null>(null)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [storagePlan, setStoragePlan] = useState({
    tier: 'Basic',
    used: 3.25,
    total: 5,
    percentage: 65
  })
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }
  
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (files) {
      setUploading(true)
      
      // Simulate upload
      setTimeout(() => {
        setUploadResult({ cid: 'bafybeihvvulpp4xkcbkwthrotatd7yea4jmzk3lqbwuxnzwpnmvr4gfxja' })
        setUploading(false)
      }, 2000)
    }
  }
  
  return (
    <div className="space-y-6 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 border-b-2 border-gray-400 pb-2">
          <span className="inline-block mr-2 animate-float">📤</span>
          Upload to OpenDrive
        </h1>
        <p className="text-gray-600 mb-6">
          Select files from your device to store them on the decentralized network.
          Files uploaded to OpenDrive are content-addressed and accessible from anywhere.
        </p>

        {/* Current Plan Status */}
        <div className="bg-gray-200 p-4 rounded-sm mb-6 border border-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <p className="font-medium flex items-center">
                <span className="mr-2 text-blue-600">📊</span>
                Storage: {storagePlan.used} MB of {storagePlan.total} GB ({storagePlan.percentage}%)
              </p>
              <div className="w-full md:w-48 bg-gray-300 h-2 mt-1 rounded-full overflow-hidden">
                <div 
                  className={`h-2 rounded-full ${storagePlan.percentage > 90 ? 'bg-red-500' : 'bg-blue-500'} shimmer`}
                  style={{ width: `${storagePlan.percentage}%` }}
                ></div>
              </div>
            </div>
            <Link to="/subscription" className="btn-primary text-sm py-1 px-4 animate-pulse">
              Upgrade Plan
            </Link>
          </div>
        </div>

        <form onSubmit={handleUpload} className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="border-2 border-dashed border-gray-400 rounded-sm p-6 mb-4 bg-gray-200 transition-all hover:bg-gray-300">
            <div className="flex flex-col items-center">
              <label className="w-full flex flex-col items-center cursor-pointer">
                <span className="mb-4 text-gray-600 text-center">
                  {files ? (
                    <span className="animate-fade-in">Selected {files.length} file(s)</span>
                  ) : (
                    <span className="flex items-center">
                      <span className="animate-float mr-2">📂</span>
                      Drag files here or click to select
                    </span>
                  )}
                </span>
                <input 
                  type="file" 
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="btn-primary inline-block px-6 transition-transform hover:scale-105">
                  Select Files
                </span>
              </label>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-6 transition-transform active:scale-95"
            disabled={!files || uploading}
          >
            {uploading ? (
              <span className="flex items-center">
                <span className="inline-block w-4 h-4 border-2 border-gray-100 border-t-transparent rounded-full animate-rotate mr-2"></span>
                Uploading...
              </span>
            ) : (
              "Upload to OpenDrive"
            )}
          </button>
        </form>
        
        {uploadResult && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-sm animate-fade-in">
            <p className="font-medium text-green-800 flex items-center">
              <span className="mr-2 text-2xl animate-pulse">✅</span>
              Upload complete!
            </p>
            <p className="text-sm text-green-700 mt-1">Your file is now available on the decentralized network</p>
            <div className="mt-3 font-mono text-xs bg-white p-2 border border-green-200 rounded overflow-x-auto">
              CID: {uploadResult.cid}
            </div>
            <div className="flex space-x-3 mt-4">
              <a
                href={`https://ipfs.io/ipfs/${uploadResult.cid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-1 px-4"
              >
                View File
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(`https://ipfs.io/ipfs/${uploadResult.cid}`)}
                className="btn-secondary text-xs py-1 px-4"
              >
                Copy Link
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">How OpenDrive Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm">
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item hover:bg-gray-200 transition-colors">
            <div className="font-bold mb-1 flex items-center">
              <span className="mr-2 animate-float">1️⃣</span>
              Upload
            </div>
            <p className="text-gray-600">Your files are processed and converted to IPFS-compatible format.</p>
          </div>
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item hover:bg-gray-200 transition-colors">
            <div className="font-bold mb-1 flex items-center">
              <span className="mr-2 animate-float">2️⃣</span>
              Distribute
            </div>
            <p className="text-gray-600">Content is distributed across the IPFS network, ensuring availability.</p>
          </div>
          <div className="p-3 border border-gray-300 rounded-sm animate-slide-up stagger-item hover:bg-gray-200 transition-colors">
            <div className="font-bold mb-1 flex items-center">
              <span className="mr-2 animate-float">3️⃣</span>
              Access
            </div>
            <p className="text-gray-600">Use your unique CID to access your files from anywhere, anytime.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadPage 