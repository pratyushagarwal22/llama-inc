import PricingCard from '@/components/PricingCard'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center 
                     justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Llama Inc.
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        AI-powered travel planning — upgraded.
      </p>
      <PricingCard />
    </main>
  )
}
