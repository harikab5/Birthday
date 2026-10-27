import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function PageShell({ eyebrow, title, subtitle, children, previous, next, nextLabel, previousLabel }) {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-20 sm:px-8">
      <header className="mb-12 text-center animate-fadeUp">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200/20 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-rose-100/80">
          <Heart size={13} className="text-pink-300" />
          {eyebrow}
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-4xl leading-tight text-rose-50 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-rose-100/70 sm:text-lg">{subtitle}</p>}
      </header>

      <section className="animate-fadeUp">{children}</section>

      <nav className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {previous && (
          <Link className="btn-secondary" to={previous}>
            {previousLabel || '← Go back'}
          </Link>
        )}
        {next && (
          <Link className="btn-primary" to={next}>
            {nextLabel || 'Continue →'}
          </Link>
        )}
      </nav>
      <footer className="mt-auto pt-16 text-center text-xs tracking-wide text-rose-100/40">
        made with a little courage & a lot of heart <span className="text-pink-300">♥</span>
      </footer>
    </main>
  )
}
