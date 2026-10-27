import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const messages = [
  {
    text: 'Today is all about you',
    duration: 3200,
  },
  {
    text: 'the day someone as special as you came into this world 🌎❤️',
    duration: 3800,
  },
  {
    text: 'And finally… the day is here ✨',
    duration: 3200,
    special: true,
  },
  {
    text: 'Happy Birthday ..... ❤️',
    duration: 3000,
    special: true,
  },
  {
    text: "I don't know if you expected a wish from me today\nbut there was no way I could let this day pass without wishing you",
    duration: 6000,
  },
  {
    text: 'I wish you endless happiness\npeace in your heart\nsuccess in everything you do\nand a thousand little reasons to smile every single day ',
    duration: 6500,
  },
  {
    text: "I hope life gives you everything you've been dreaming of\nand even the beautiful things you haven't dreamed of yet ✨",
    duration: 5500,
  },
  {
    text: 'I wish I could see that smile of yours today ❤️',
    duration: 4000,
    special: true,
  },
  {
    text: 'Even though things are different between us now\nI still genuinely wish the best for you\ntoday and on every day that follows',
    duration: 6000,
  },
  {
    text: "And if there's one thing I want you to remember today\nit's that you are special\nmore than words could ever explain 💗",
    duration: 6000,
  },
  {
    text: 'Once again... Happy Birthday  my forever 🎂❤️',
    duration: 4000,
    special: true,
  },
  {
    text: 'Now…\nshall we take a little walk down memory lane? 📸✨',
    duration: 4500,
  },
]

const particles = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  delay: `${(index % 8) * -1.4}s`,
  duration: `${9 + (index % 6) * 2}s`,
  size: `${3 + (index % 4) * 2}px`,
}))

const hearts = Array.from({ length: 18 }, (_, index) => ({
  x: `${(index * 23 + 5) % 100}%`,
  delay: `${(index % 7) * -1.6}s`,
  duration: `${10 + (index % 5) * 2}s`,
  size: `${15 + (index % 4) * 7}px`,
}))

export default function Birthday() {
  const navigate = useNavigate()

  const [currentMessage, setCurrentMessage] = useState(0)
  const [photoVisible, setPhotoVisible] = useState(false)
  const [photoOnLeft, setPhotoOnLeft] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // The first four messages appear in the center.
    // The photo appears 3 seconds after the birthday greeting.
    if (currentMessage < 4) {
      const timer = setTimeout(() => {
        if (currentMessage === 3) {
          setPhotoVisible(true)
        }

        setCurrentMessage((previous) => previous + 1)
      }, messages[currentMessage].duration)

      return () => clearTimeout(timer)
    }

    // Keep the photo centered for 3 seconds after it appears.
    if (currentMessage === 4 && !photoOnLeft) {
      const timer = setTimeout(() => {
        setPhotoOnLeft(true)
      }, 3000)

      return () => clearTimeout(timer)
    }

    // Display each remaining message beside the photo.
    if (
      photoOnLeft &&
      currentMessage >= 4 &&
      currentMessage < messages.length
    ) {
      const timer = setTimeout(() => {
        setCurrentMessage((previous) => previous + 1)
      }, messages[currentMessage].duration)

      return () => clearTimeout(timer)
    }

    // Show the final button after all messages.
    if (currentMessage >= messages.length) {
      const timer = setTimeout(() => {
        setShowButton(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [currentMessage, photoOnLeft])

  const activeMessage = messages[currentMessage]

  return (
    <main className="birthday-screen">
      <div className="birthday-glow birthday-glow-one" />
      <div className="birthday-glow birthday-glow-two" />
      <div className="birthday-glow birthday-glow-three" />

      <div className="birthday-floating-hearts" aria-hidden="true">
        {hearts.map((heart, index) => (
          <span
            key={index}
            style={{
              '--heart-x': heart.x,
              '--heart-delay': heart.delay,
              '--heart-duration': heart.duration,
              '--heart-size': heart.size,
            }}
          >
            {index % 3 === 0 ? '♥' : '♡'}
          </span>
        ))}
      </div>

      <div className="birthday-particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={index}
            style={{
              '--particle-left': particle.left,
              '--particle-delay': particle.delay,
              '--particle-duration': particle.duration,
              '--particle-size': particle.size,
            }}
          />
        ))}
      </div>

      <section
        className={`birthday-content ${
          photoOnLeft ? 'birthday-content-split' : ''
        }`}
        aria-live="polite"
      >
        {/* Photo has no card or background panel behind it. */}
        {photoVisible && (
          <div
            className={`birthday-photo-stage ${
              photoOnLeft ? 'birthday-photo-stage-left' : ''
            }`}
          >
            <img
              src="/mylove.png"
              alt="My love"
              className="birthday-photo"
            />

            <p className="birthday-photo-caption">My Love ❤️</p>
          </div>
        )}

        {/* First four messages appear in the center. */}
        {!photoVisible && currentMessage < 4 && activeMessage && (
          <div
            className="birthday-intro-message"
            key={currentMessage}
          >
            <p
              className={`birthday-message ${
                activeMessage.special
                  ? 'birthday-message-special'
                  : ''
              }`}
            >
              {activeMessage.text}
            </p>
          </div>
        )}

        {/* Remaining messages appear on the right after the photo moves. */}
        {photoOnLeft &&
          currentMessage >= 4 &&
          currentMessage < messages.length && (
            <div
              className="birthday-side-story"
              key={currentMessage}
            >
              <p
                className={`birthday-message birthday-side-message ${
                  activeMessage.special
                    ? 'birthday-message-special'
                    : ''
                }`}
              >
                {activeMessage.text}
              </p>
            </div>
          )}

        {showButton && (
          <div className="birthday-side-story birthday-final-story">
            <p className="birthday-message birthday-message-special">
              Ready to revisit our memories? 💗
            </p>

            <button
              type="button"
              className="birthday-memory-button"
              onClick={() => navigate('/memories')}
            >
              LET'S REMEMBER US
              <span aria-hidden="true"> →</span>
            </button>
          </div>
        )}
      </section>

      <footer className="birthday-footer">
        MADE WITH LOVE ♥
      </footer>
    </main>
  )
}