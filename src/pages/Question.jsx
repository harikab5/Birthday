import { useState } from 'react'
import { Heart, Mail, MessageCircleHeart, Sparkles } from 'lucide-react'
import PageShell from '../components/PageShell'

export default function Question() {
  const [showNote, setShowNote] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  return (
    <PageShell
      eyebrow="the last page · just one question"
      title="Will you let our story have another chapter?"
      subtitle="There's no perfect way to ask this, so I'll simply ask with an honest heart."
      previous="/another-chance"
      previousLabel="Read that again ←"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-pink-200/20 bg-pink-200/[0.06] shadow-glow">
          <Heart className="animate-pulseSoft fill-pink-200/20 text-pink-200" size={48} strokeWidth={1.1} />
        </div>
        <div className="space-y-5 text-base leading-8 text-rose-50/80 sm:text-lg">
          <p>If our story isn't something you want to revisit, I'll respect your feelings.</p>
          <p>But if there's still a little space in your heart for a conversation with me, would you be willing to give us another chance to understand each other?</p>
          <p>Not to go back and repeat the past, but to see whether we could build something better, together.</p>
          <p>You don't have to give me an answer just because it's your birthday. I just wanted you to know where my heart stands.</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" className="btn-primary" onClick={() => { setShowNote(true); setShowThanks(false) }}>
            <MessageCircleHeart size={17} /> Maybe we can talk? ♥
          </button>
          <button type="button" className="btn-secondary" onClick={() => { setShowThanks(true); setShowNote(false) }}>
            <Mail size={17} /> I read everything 🤍
          </button>
        </div>

        {showNote && (
          <div className="mt-7 rounded-3xl border border-pink-200/20 bg-white/[0.06] p-6 text-left animate-fadeUp">
            <p className="font-display text-2xl text-pink-200">Thank you for hearing me. 🤍</p>
            <p className="mt-3 leading-7 text-rose-50/75">If you'd like to talk, I'd be glad to hear from you whenever you're ready. No pressure to decide anything right now. A simple conversation is enough to begin.</p>
            {/* Replace the # below with your own contact link if you want a contact button. */}
            <a className="btn-primary mt-5" href="mailto:you@example.com?subject=I%20read%20your%20birthday%20letter">
              <Mail size={16} /> Send me a message
            </a>
            <p className="mt-3 text-xs text-rose-100/40">Remember to replace you@example.com with your email address.</p>
          </div>
        )}

        {showThanks && (
          <div className="mt-7 rounded-3xl border border-pink-200/20 bg-white/[0.06] p-6 animate-fadeUp">
            <Sparkles className="mx-auto text-pink-200" size={24} />
            <p className="mt-3 font-display text-2xl text-pink-200">Thank you for reading my little story.</p>
            <p className="mt-3 leading-7 text-rose-50/75">Whatever you feel, I hope your birthday is full of warmth, peace, and reasons to smile. I'm grateful I could wish you in my own little way.</p>
          </div>
        )}

        <p className="mt-12 font-handwritten text-4xl text-pink-200 sm:text-5xl">Happy birthday, with love. ♥</p>
      </div>
    </PageShell>
  )
}
