import SubscribeButton from './SubscribeButton'

export default function PricingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 
                    max-w-sm w-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Premium Plan
      </h2>
      <p className="text-gray-500 mb-6">
        Unlock AI itinerary planning, packing lists, and 
        real-time trip recommendations.
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">
          $10
        </span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="text-gray-600 space-y-2 mb-8 text-sm">
        <li>✓ Unlimited AI itineraries</li>
        <li>✓ Smart packing lists</li>
        <li>✓ Real-time trip recommendations</li>
        <li>✓ Priority support</li>
      </ul>
      <SubscribeButton />
    </div>
  )
}
