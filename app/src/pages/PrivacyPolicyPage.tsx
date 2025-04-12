import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="space-y-6 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Privacy Policy</h1>
        
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              This Privacy Policy explains how OpenDrive ("we", "us", "our") collects, uses, and discloses your information 
              when you use our decentralized storage service. This policy applies to all users of our platform, website, 
              and related services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">2. Information We Collect</h2>
            <p className="text-gray-700 mb-2">
              We collect several types of information for the purpose of providing and improving our service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Email address and authentication details when you create an account.</li>
              <li><strong>Usage Data:</strong> Information about how you use our services, including storage metrics, bandwidth usage, and interaction with our platform.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies to improve your experience.</li>
              <li><strong>Content Metadata:</strong> Information about the files you store, such as file names, sizes, and CIDs (Content Identifiers).</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and manage your account</li>
              <li>To send service notifications and updates</li>
              <li>To respond to your comments and questions</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To prevent fraudulent or unauthorized usage</li>
              <li>To send marketing communications (if you've opted in)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">4. Decentralized Storage and Your Content</h2>
            <p className="text-gray-700 mb-2">
              OpenDrive is built on decentralized storage protocols (IPFS and Filecoin). Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The content you upload is distributed across a decentralized network.</li>
              <li>Content is addressable by its cryptographic hash (CID).</li>
              <li>Anyone with your content's CID can potentially access it.</li>
              <li>For sensitive data, we recommend encrypting your files before uploading.</li>
              <li>Deletion requests may not result in complete removal from all nodes in the network.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">5. Sharing Your Information</h2>
            <p className="text-gray-700 mb-2">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Companies that help us deliver our services.</li>
              <li><strong>Compliance & Legal:</strong> When required by law or to protect rights and safety.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">6. Cookies and Tracking</h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience, analyze usage, and for marketing purposes. 
              You can control cookies through your browser settings, although disabling them may impact functionality.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-2">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Data portability</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-700 mt-2">
              To exercise these rights, please contact us at privacy@opendrive.io.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">8. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your information, 
              but no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">9. International Data Transfers</h2>
            <p className="text-gray-700">
              As a global service utilizing decentralized networks, your information may be processed in various 
              countries with different data protection laws.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">10. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to children under 13. We do not knowingly collect information from 
              children under 13. If you believe we have collected information from a child, please contact us.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">11. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
              the new policy on our site or via email.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">12. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage; 