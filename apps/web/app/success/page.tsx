export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center 
                     justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 
                      max-w-sm w-full text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          You're in!
        </h1>
        <p className="text-gray-600">
          Welcome to Llama Inc. Premium. Your AI travel 
          assistant is ready.
        </p>
      </div>
    </main>
  )
}
