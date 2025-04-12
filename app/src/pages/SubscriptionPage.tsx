import React from 'react'
import { Link } from 'react-router-dom'

function PricingCard({ 
  title, 
  price, 
  isPopular, 
  storage, 
  bandwidth, 
  features, 
  buttonText,
  delay = 0
}: { 
  title: string, 
  price: string, 
  isPopular?: boolean, 
  storage: string, 
  bandwidth: string, 
  features: string[], 
  buttonText: string,
  delay?: number
}) {
  return (
    <div 
      className={`card relative animate-slide-up stagger-item ${isPopular ? 'border-2 border-blue-500' : ''} ${isPopular ? 'animate-pulse' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs py-1 px-3 rounded-bl-md">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-500">/month</span>}
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <span className="mr-2 text-blue-500 animate-float">📦</span>
          <span><strong>{storage}</strong> storage</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-blue-500 animate-float" style={{ animationDelay: '0.5s' }}>🔄</span>
          <span><strong>{bandwidth}</strong> monthly bandwidth</span>
        </div>
        <div className="border-t border-gray-200 my-4"></div>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
            <span className="mr-2 text-green-500">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link 
        to="/signup" 
        className={`block text-center py-2 px-4 rounded-sm transition-all w-full hover:scale-105 ${
          isPopular 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}

function SubscriptionPage() {
  return (
    <div className="space-y-8 page-transition">
      <div className="card animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 border-b-2 border-gray-400 pb-2">Subscription Plans</h1>
        <p className="text-gray-700 mb-6">
          Choose the perfect storage plan for your needs. All plans include our decentralized storage technology,
          content-addressing, and high-speed retrieval.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PricingCard
          title="Basic"
          price="Free"
          storage="5GB"
          bandwidth="10GB"
          features={[
            "Content-addressed storage",
            "IPFS & Filecoin technology",
            "Public file sharing",
            "Basic support"
          ]}
          buttonText="Get Started Free"
          delay={0.1}
        />

        <PricingCard
          title="Standard"
          price="$12.99"
          isPopular={true}
          storage="100GB"
          bandwidth="200GB"
          features={[
            "Everything in Basic",
            "Priority uploads",
            "Enhanced file recovery",
            "Email support"
          ]}
          buttonText="Upgrade to Standard"
          delay={0.2}
        />

        <PricingCard
          title="Professional"
          price="$49.99"
          storage="1TB"
          bandwidth="2TB"
          features={[
            "Everything in Standard",
            "Advanced analytics",
            "Multiple user accounts",
            "24/7 priority support"
          ]}
          buttonText="Upgrade to Pro"
          delay={0.3}
        />

        <PricingCard
          title="Enterprise"
          price="$199.99"
          storage="5TB"
          bandwidth="10TB"
          features={[
            "Everything in Professional",
            "Dedicated resources",
            "Custom API quotas",
            "SLA guarantees",
            "Dedicated account manager"
          ]}
          buttonText="Contact Sales"
          delay={0.4}
        />
      </div>

      <div className="card mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Frequently Asked Questions</h2>
        <div className="space-y-4 mt-4">
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-bold mb-2">What happens if I exceed my storage limit?</h3>
            <p className="text-gray-600">If you exceed your storage limit, you'll be able to continue storing files at our standard overage rate of $0.02/GB. You can upgrade your plan at any time to avoid overage charges.</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="font-bold mb-2">How is bandwidth calculated?</h3>
            <p className="text-gray-600">Bandwidth refers to the amount of data transferred when others access your files. Each plan includes a bandwidth allocation, with additional bandwidth available at $0.01/GB.</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-bold mb-2">Can I upgrade or downgrade at any time?</h3>
            <p className="text-gray-600">Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle.</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="font-bold mb-2">How secure is my data?</h3>
            <p className="text-gray-600">Your data is stored across a distributed network using content-based addressing, making it highly resilient to outages. All plans include the same security features and distributed storage technology.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 p-6 rounded-sm animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
            <p className="text-gray-700">Contact our sales team for tailored enterprise solutions and volume discounts.</p>
          </div>
          <Link to="/contact" className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-sm transition-all hover:scale-105">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage 