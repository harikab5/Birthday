import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-5 text-center">
      <div>
        <p className="font-handwritten text-5xl text-pink-200">Oops, little detour ♥</p>
        <p className="mt-4 text-rose-100/70">This page isn't part of the story.</p>
        <Link to="/" className="btn-primary mt-8">Go to the beginning →</Link>
      </div>
    </main>
  )
}
