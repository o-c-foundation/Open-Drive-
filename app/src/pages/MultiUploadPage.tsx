import React, { useState } from 'react'
import { Uploader, WrapInDirectoryCheckbox, useUploader } from '@w3ui/react'
import { SpaceEnsurer, UploaderForm } from '@w3ui/example-react-components'

function Options() {
  const [{ files }] = useUploader()
  const [allowDirectory, setAllowDirectory] = useState(true)

  return (
    <div className="flex flex-col space-y-2 mt-4">
      {(files?.length === 1) && (
        <label className="flex items-center space-x-2">
          <WrapInDirectoryCheckbox />
          <span>Wrap file in directory?</span>
        </label>
      )}
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          checked={allowDirectory} 
          onChange={e => setAllowDirectory(e.target.checked)}
          className="h-4 w-4 text-primary"
        />
        <span>Allow directory selection?</span>
      </label>
    </div>
  )
}

function MultiUploadPage() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">Upload Multiple Files</h1>
        <p className="text-gray-600 mb-6">
          Select multiple files or entire folders to upload to IPFS at once.
          This makes it easy to store related files together.
        </p>

        <SpaceEnsurer>
          <Uploader>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6">
              <UploaderForm multiple allowDirectory={true} />
              <Options />
            </div>
          </Uploader>
        </SpaceEnsurer>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Tips for Multi-File Uploads</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>You can select multiple files by holding Ctrl (or Cmd on Mac) while selecting files.</li>
          <li>To upload entire folders, enable directory selection and choose a folder.</li>
          <li>If uploading a single file, you can choose to wrap it in a directory for better organization.</li>
          <li>Large uploads may take some time. Please be patient while your files are being processed.</li>
        </ul>
      </div>
    </div>
  )
}

export default MultiUploadPage 