export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        AI Echo — Where Thoughts Find Resonance
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center mb-6">
        A space where psychology meets AI.  
        Reflections, emotions, and insights  
        echo back with clarity and calm.
      </p>
      <nav className="flex gap-6 text-blue-600 underline">
        <a href="/about">About</a>
        <a href="/videos">Videos</a>
        <a href="/ai-chat">AI Chat</a>
      </nav>
    </main>
  )
}
