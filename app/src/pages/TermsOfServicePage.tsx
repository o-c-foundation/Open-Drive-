import React from 'react';

function TermsOfServicePage() {
  return (
    <div className="space-y-6 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-400 pb-2">Terms of Service</h1>
        
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using OpenDrive's services, provided by The Open Crypto Foundation, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
              If you do not agree with any of these terms, you are prohibited from using or accessing this service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">2. Description of Service</h2>
            <p className="text-gray-700">
              OpenDrive by The Open Crypto Foundation provides decentralized storage services utilizing IPFS technologies. Our services enable users 
              to store, retrieve, and share content through distributed networks. The nature of decentralized storage means 
              that content may be stored across multiple nodes in the network for enhanced redundancy and availability.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">3. Account Registration and Security</h2>
            <p className="text-gray-700">
              To use certain features of our service, you must register for an account. You agree to provide accurate and complete 
              information during registration and to keep your account credentials secure. You are responsible for all activities 
              that occur under your account.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">4. Subscription Plans and Billing</h2>
            <p className="text-gray-700 mb-2">
              We offer various subscription plans with different storage and bandwidth allocations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Basic Plan:</strong> Free with 5GB storage and limited features.</li>
              <li><strong>Standard Plan:</strong> Paid subscription with enhanced storage capacity and features.</li>
              <li><strong>Professional Plan:</strong> Premium subscription for higher storage needs and advanced features.</li>
              <li><strong>Enterprise Plan:</strong> Custom solutions for large-scale storage requirements.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              By selecting a paid plan, you agree to pay all fees according to the billing terms in effect at the time. 
              Subscription fees are charged on a recurring basis. You may upgrade or downgrade your plan at any time, 
              subject to prorated charges or credits.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">5. User Content and Conduct</h2>
            <p className="text-gray-700 mb-2">
              You retain ownership of the content you upload to our service. However, you grant us necessary licenses to provide 
              the service. You agree not to use our service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Upload, share, or store illegal or unauthorized content</li>
              <li>Infringe upon intellectual property rights of others</li>
              <li>Distribute malware, viruses, or harmful code</li>
              <li>Engage in any activity that interferes with or disrupts the service</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Use the service in any manner that violates applicable laws or regulations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">6. Content Removal and Service Termination</h2>
            <p className="text-gray-700">
              We reserve the right to remove content that violates these terms and to terminate or suspend accounts for violations. 
              Due to the nature of decentralized storage, complete removal of content from all network nodes may not be technically 
              possible. We recommend not storing sensitive information without proper encryption.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">7. Privacy and Data Protection</h2>
            <p className="text-gray-700">
              Our Privacy Policy describes how we collect, use, and protect your personal information. By using our service, 
              you consent to the data practices outlined in our Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">8. Service Availability and Warranty Disclaimer</h2>
            <p className="text-gray-700">
              We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. 
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. We disclaim all 
              warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPENDRIVE AND THE OPEN CRYPTO FOUNDATION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
              OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF OR INABILITY TO USE 
              THE SERVICE.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">10. Modifications to Terms and Service</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Service or our service offerings at any time. We will provide 
              notice of significant changes through our website or direct communication. Your continued use of the service 
              after such modifications constitutes your acceptance of the revised terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of Switzerland, without regard 
              to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-2">12. Contact Information</h2>
            <p className="text-gray-700">
              For questions regarding these Terms, please contact us at:
              <br />
              <a href="mailto:legal@opencryptofoundation.org" className="text-blue-600 hover:underline">legal@opencryptofoundation.org</a>
            </p>
          </section>
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <p className="text-gray-600 text-sm">Last Updated: July 10, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfServicePage; 