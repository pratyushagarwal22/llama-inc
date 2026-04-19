export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center 
                     justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 
                      max-w-sm w-full text-center">
        <div className="text-5xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          No worries — you can try again whenever you're ready.
        </p>
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white 
                     py-2 px-6 rounded-xl font-semibold 
                     hover:bg-indigo-700 transition-colors"
        >
          Back to pricing
        </a>
      </div>
    </main>
  )
}
