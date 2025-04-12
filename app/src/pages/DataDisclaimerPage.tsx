import React from 'react';

function DataDisclaimerPage() {
  return (
    <div className="space-y-6 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">OpenDrive Privacy and Data Use Disclaimer</h1>
        
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-bold mb-2">Understanding Decentralized Storage</h2>
            <p className="text-gray-700">
              OpenDrive utilizes decentralized storage technology based on IPFS (InterPlanetary File System) and Filecoin. 
              This approach to data storage is fundamentally different from traditional centralized storage solutions. 
              It's important that all users understand how this technology works and its implications for data privacy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">Content Addressability and Public Access</h2>
            <p className="text-gray-700 mb-2">
              When you upload files to OpenDrive, your content is:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Content-addressed:</strong> Each file receives a unique Content Identifier (CID) based on its 
                cryptographic hash. This means anyone with the CID can potentially access your content.
              </li>
              <li>
                <strong>Publicly addressable:</strong> Unlike traditional private cloud storage, content stored through 
                decentralized networks is fundamentally designed to be retrievable by any node in the network with the correct CID.
              </li>
              <li>
                <strong>Distributed across multiple nodes:</strong> Your data may be stored on multiple computers worldwide, 
                operated by different entities participating in the decentralized network.
              </li>
            </ul>
          </section>
          
          <section className="bg-yellow-50 p-4 border border-yellow-300 rounded-sm">
            <h2 className="text-xl font-bold mb-2">Important Privacy Implications</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Do not upload sensitive or confidential information without encryption.</strong> This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal identification documents</li>
                <li>Financial information</li>
                <li>Private communications</li>
                <li>Medical records</li>
                <li>Confidential business documents</li>
                <li>Any information you would not want to be publicly accessible</li>
              </ul>
              <p className="text-gray-700 mt-2">
                If you must store sensitive information, encrypt your files before uploading them to OpenDrive.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">Data Persistence and Deletion</h2>
            <p className="text-gray-700">
              Due to the decentralized nature of the storage network:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Content may persist indefinitely:</strong> Even after you delete files from your OpenDrive account, 
                copies may remain on the network if they have been pinned by other nodes.
              </li>
              <li>
                <strong>Complete deletion cannot be guaranteed:</strong> We cannot ensure that all copies of your data are 
                removed from every node in the decentralized network.
              </li>
              <li>
                <strong>Think before you upload:</strong> Consider all uploads to be potentially permanent and public.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">Data Protection Measures</h2>
            <p className="text-gray-700">
              While the fundamental nature of decentralized storage involves these privacy implications, 
              OpenDrive implements several measures to help protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We do not publicly advertise or link to your content without your permission</li>
              <li>We provide private sharing options that limit who receives your content's CID</li>
              <li>We offer guidance on best practices for securing sensitive information</li>
              <li>We maintain strict access controls for our systems and services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">User Responsibility</h2>
            <p className="text-gray-700">
              By using OpenDrive, you acknowledge that you understand these privacy implications and agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Take appropriate precautions when uploading sensitive content</li>
              <li>Comply with all applicable laws regarding data privacy and security</li>
              <li>Not upload content that infringes on others' privacy or intellectual property</li>
              <li>Accept responsibility for the nature of content you choose to store</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">Further Questions</h2>
            <p className="text-gray-700">
              If you have questions about data privacy or security on OpenDrive, please contact us at:
              <br />
              <a href="mailto:privacy@opendrive.io" className="text-blue-600 hover:underline">privacy@opendrive.io</a>
            </p>
          </section>
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <p className="text-gray-600 text-sm">Last Updated: May 15, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDisclaimerPage; 