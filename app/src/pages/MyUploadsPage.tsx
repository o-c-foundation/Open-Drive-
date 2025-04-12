import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Upload {
  cid: string
  name: string
  type: string
  size: number
  timestamp: number
}

function FileLink({ upload, index }: { upload: Upload, index: number }) {
  const displayCid = `${upload.cid.substring(0, 8)}...${upload.cid.substring(upload.cid.length - 8)}`
  const formattedDate = new Date(upload.timestamp).toLocaleString()
  const formattedSize = upload.size < 1024 
    ? `${upload.size} B` 
    : upload.size < 1048576 
      ? `${(upload.size / 1024).toFixed(1)} KB` 
      : `${(upload.size / 1048576).toFixed(1)} MB`
  
  // Set file type icon
  let fileIcon = '📄';
  if (upload.type.includes('image')) fileIcon = '🖼️';
  if (upload.type.includes('video')) fileIcon = '🎬';
  if (upload.type.includes('audio')) fileIcon = '🎵';
  if (upload.type.includes('pdf')) fileIcon = '📑';
  if (upload.type.includes('zip') || upload.type.includes('archive')) fileIcon = '📦';
  if (upload.type.includes('json') || upload.type.includes('text')) fileIcon = '📝';
  
  return (
    <div 
      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-200 rounded-sm mb-3 border border-gray-300 overflow-hidden animate-slide-up stagger-item hover:bg-gray-300 transition-colors"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="mb-2 sm:mb-0 flex items-start">
        <span className="mr-2 pixelated text-lg animate-float" style={{ animationDelay: `${0.1 * index}s` }}>{fileIcon}</span>
        <div>
          <div className="font-medium">{upload.name}</div>
          <div className="text-xs text-gray-600">
            <span className="font-mono">{displayCid}</span> • {formattedSize} • {formattedDate}
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <a 
          href={`https://ipfs.io/ipfs/${upload.cid}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs py-1 px-2 transition-transform hover:scale-105"
        >
          View
        </a>
        <button 
          onClick={() => navigator.clipboard.writeText(`https://ipfs.io/ipfs/${upload.cid}`)}
          className="btn-secondary text-xs py-1 px-2 transition-transform hover:scale-105"
        >
          Copy Link
        </button>
      </div>
    </div>
  )
}

function MyUploadsPage() {
  const [uploads, setUploads] = useState<Upload[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPlan, setCurrentPlan] = useState({
    name: 'Basic',
    usedStorage: 3.25,
    totalStorage: 5,
    usedPercentage: 65
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const mockUploads: Upload[] = [
        {
          cid: 'bafybeihvvulpp4xkcbkwthrotatd7yea4jmzk3lqbwuxnzwpnmvr4gfxja',
          name: 'document.pdf',
          type: 'application/pdf',
          size: 2345657,
          timestamp: Date.now() - 86400000 * 2
        },
        {
          cid: 'bafybeihs5xqq5vqnd2ydnqjtoohodr654xbbiusu2gy7kpentlxvpaie7u',
          name: 'project-image.jpg',
          type: 'image/jpeg',
          size: 1048576,
          timestamp: Date.now() - 86400000
        },
        {
          cid: 'bafybeihpetclqvwb4qkiumotugrwzftjwcgjl7xo26laxbgckgd7ea2hty',
          name: 'data.json',
          type: 'application/json',
          size: 7546,
          timestamp: Date.now()
        }
      ]
      
      setUploads(mockUploads)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="space-y-6 page-transition">
      <div className="card animate-fade-in">
        <div className="flex justify-between items-center mb-4 border-b-2 border-gray-400 pb-2">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="mr-2 animate-float">🗄️</span>
            OpenDrive Files
          </h1>
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 800);
            }}
            className="btn-secondary text-xs py-1 px-2 transition-transform hover:scale-105"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-12 animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-t-2 border-b-2 border-gray-600 rounded-full animate-rotate mb-3"></div>
              <p className="text-sm text-gray-500">Loading files from IPFS network...</p>
            </div>
          </div>
        ) : uploads.length === 0 ? (
          <div className="p-8 text-center bg-gray-200 rounded-sm border border-gray-300 animate-fade-in">
            <div className="text-4xl mb-3 animate-float">📭</div>
            <p className="text-gray-600">You haven't uploaded any files yet.</p>
            <p className="text-sm text-gray-500 mt-2">Files you upload will appear here.</p>
            <Link to="/upload" className="btn-primary mt-4 inline-block animate-pulse">Upload Your First File</Link>
          </div>
        ) : (
          <div className="space-y-1">
            {uploads.map((upload, i) => (
              <FileLink key={i} upload={upload} index={i} />
            ))}
          </div>
        )}
      </div>

      <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-1">
          <h2 className="text-xl font-bold">Storage Plan</h2>
          <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full animate-pulse">
            {currentPlan.name} Plan
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Storage Usage</span>
            <span className="font-medium">{currentPlan.usedStorage} MB of {currentPlan.totalStorage} GB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className={`h-2.5 rounded-full ${currentPlan.usedPercentage > 90 ? 'bg-red-500' : 'bg-blue-500'} shimmer`} 
              style={{ width: `${currentPlan.usedPercentage}%` }}>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="mb-3 md:mb-0">
            <p className="font-medium">Need more storage?</p>
            <p className="text-sm text-gray-600">Upgrade your plan to get more storage and features</p>
          </div>
          <Link to="/subscription" className="btn-primary text-center animate-pulse transition-transform hover:scale-105">
            Upgrade Plan
          </Link>
        </div>
      </div>

      <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Storage Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-gray-200 rounded-sm animate-slide-up stagger-item hover:bg-gray-300 transition-colors">
            <div className="text-xs text-gray-500">Total Files</div>
            <div className="text-xl font-bold text-gray-700">{uploads.length}</div>
          </div>
          <div className="p-3 bg-gray-200 rounded-sm animate-slide-up stagger-item hover:bg-gray-300 transition-colors">
            <div className="text-xs text-gray-500">Total Size</div>
            <div className="text-xl font-bold text-gray-700">{currentPlan.usedStorage} MB</div>
          </div>
          <div className="p-3 bg-gray-200 rounded-sm animate-slide-up stagger-item hover:bg-gray-300 transition-colors">
            <div className="text-xs text-gray-500">Network Status</div>
            <div className="text-sm font-bold text-gray-700 flex items-center justify-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span> Connected
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyUploadsPage 