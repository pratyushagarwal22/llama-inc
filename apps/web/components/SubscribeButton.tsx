'use client'

export default function SubscribeButton() {
  const handleSubscribe = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/create-checkout-session`,
      { method: 'POST' }
    )
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      className="w-full bg-indigo-600 text-white py-3 px-6 
                 rounded-xl font-semibold hover:bg-indigo-700 
                 transition-colors"
    >
      Subscribe Now
    </button>
  )
}
