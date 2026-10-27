
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const messages = [
  'Hey you... 👋🏻',
  "Yes... it's you. ❤️",
  'I made something special for my special person... ✨',
  "I know it's been a while. 🌙",
  "I know you didn't expect this from me.",
  'Not just a birthday wish... 🎂',
  "But also to tell you what's in my heart. ❤️",
  'Share some memories. 📸',
  'A few feelings. 💭',
  'Are you ready? ✨',
]

const floatingHearts = [
  { x: '8%', delay: '0s', duration: '12s', size: '24px' },
  { x: '22%', delay: '3s', duration: '15s', size: '18px' },
  { x: '38%', delay: '1s', duration: '13s', size: '28px' },
  { x: '55%', delay: '5s', duration: '16s', size: '20px' },
  { x: '72%', delay: '2s', duration: '14s', size: '26px' },
  { x: '88%', delay: '6s', duration: '12s', size: '18px' },
]

export default function Home() {
  const navigate = useNavigate()
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (currentMessage >= messages.length) {
      const timer = setTimeout(() => setShowButton(true), 900)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setCurrentMessage((previous) => previous + 1)
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentMessage])

  return (
    <main className="home-screen">
      {/* Soft background glows */}
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />

      {/* Large transparent heart: top-left */}
      <div
        className="corner-outline-heart corner-outline-heart-top-left"
        aria-hidden="true"
      >
        ♡
      </div>

      {/* Large transparent heart: bottom-right */}
      <div
        className="corner-outline-heart corner-outline-heart-bottom-right"
        aria-hidden="true"
      >
        ♡
      </div>

      {/* Floating background hearts */}
      <div className="floating-hearts" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            style={{
              '--x': heart.x,
              '--delay': heart.delay,
              '--duration': heart.duration,
              '--heart-size': heart.size,
            }}
          >
            {index % 2 === 0 ? '♡' : '♥'}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="home-content">
        <section className="home-center">
          {/* Decorative divider */}
          <div className="heart-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-heart">♡</span>
            <span className="divider-line" />
          </div>

          <p className="home-eyebrow">
            A LITTLE SOMETHING FROM MY HEART
          </p>

          <div className="message-area" aria-live="polite">
            {currentMessage < messages.length ? (
              <p
                key={currentMessage}
                className="home-message message-enter"
              >
                {messages[currentMessage]}
              </p>
            ) : showButton ? (
              <button
                type="button"
                className="home-button"
                onClick={() => navigate('/birthday')}
              >
                TURN THE PAGE
                <span className="button-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            ) : (
              <span className="button-wait" aria-hidden="true" />
            )}
          </div>
        </section>
      </div>

      <footer className="home-footer">
        ♥ JUST FOR YOU ♥
      </footer>
    </main>
  )
}
