
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const openingMessages = [
  'Hey… remember us? ❤️',
  'Once upon a time, there were just two people\nwho had no idea how special they would become to each other.',
  'We made little memories,\nshared little laughs,\nand had moments that felt so ordinary back then.',
  'But somehow…\nthose ordinary moments became  my favorite memories ever 📸❤️',
  'So, shall we go back for a little while? 🌙',
]

const memories = [
  {
    image: '/memory1.jpeg',
    title: 'Our First Meet ❤️',
    lines: [
      'Do you remember the first time we met?',
      'Back then, we had no idea how much that little moment would mean to us someday.',
      'Who knew a simple meeting could become the beginning of so many memories? ❤️',
    ],
  },
  {
    image: '/memory2.jpeg',
    title: 'The Beginning of Us 💗',
    lines: [
      'Somewhere along the way, you became someone special to me.',
      'Our little conversations slowly became a part of my everyday life.',
      'Without even realizing it, you became a beautiful part of my world. 💗',
    ],
  },
  {
    image: '/memory3.jpeg',
    title: 'Our Little Moments ✨',
    lines: [
      'It was never just about the big moments.',
      'The little talks, silly things, and simple time together meant so much.',
      'Those ordinary moments became memories I will always treasure. ✨',
    ],
  },
  {
    image: '/memory4.jpeg',
    title: 'The Smiles and Laughter ',
    lines: [
      'Remember all those times we laughed together?',
      'Even the simplest moments felt special when we shared them.',
      'I wish you knew how precious those smiles still are to me. ❤️',
    ],
  },
  {
    image: '/memory5.jpeg',
    title: 'A Part of My Story ❤️',
    lines: [
      'You came into my life and made it more beautiful in ways you may never realize.',
      'Every moment with you became a little piece of happiness that I will always keep close to my heart.',
      'No matter where life takes us, the memories we created will always be a special part of my story. ❤️',
    ],
  },
  {
    image: '/memory6.jpeg',
    title: 'Moments I Wish Could Last 🌙',
    lines: [
      'If I could go back in time, I would revisit some of our happiest moments.',
      'I would hold on a little longer to those smiles, those laughs, and having you beside me.',
      'Some moments end, but the feeling of wishing they could last forever never really fades. 🥹❤️',
    ],
  },
]

export default function Memories() {
  const navigate = useNavigate()

  const [stage, setStage] = useState('intro')
  const [messageIndex, setMessageIndex] = useState(0)
  const [messageVisible, setMessageVisible] = useState(true)
  const [memoryIndex, setMemoryIndex] = useState(0)
  const [photoMoved, setPhotoMoved] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const [imageFailed, setImageFailed] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (stage !== 'intro') return

    let nextTimer

    const hideTimer = setTimeout(() => {
      setMessageVisible(false)

      nextTimer = setTimeout(() => {
        if (messageIndex < openingMessages.length - 1) {
          setMessageIndex((index) => index + 1)
          setMessageVisible(true)
        } else {
          setStage('memories')
        }
      }, 650)
    }, 3200)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [stage, messageIndex])

  useEffect(() => {
    if (stage !== 'memories') return

    setPhotoMoved(false)
    setVisibleLines(0)
    setImageFailed(false)
    setTransitioning(false)

    const timers = []

    timers.push(setTimeout(() => setPhotoMoved(true), 1300))

    memories[memoryIndex].lines.forEach((_, index) => {
      timers.push(
        setTimeout(() => setVisibleLines(index + 1), 2100 + index * 2200)
      )
    })

    timers.push(
      setTimeout(() => {
        setTransitioning(true)

        timers.push(
          setTimeout(() => {
            if (memoryIndex < memories.length - 1) {
              setMemoryIndex((index) => index + 1)
            } else {
              setStage('finished')
            }
          }, 750)
        )
      }, 9300)
    )

    return () => timers.forEach(clearTimeout)
  }, [stage, memoryIndex])

  return (
    <main className="memories-page">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            className="star"
            key={index}
            style={{
              '--x': `${(index * 37 + 9) % 100}%`,
              '--y': `${(index * 23 + 5) % 100}%`,
              '--delay': `${(index % 8) * -0.45}s`,
              '--size': `${2 + (index % 3)}px`,
            }}
          />
        ))}
      </div>

      <div className="heart-field" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            style={{
              '--left': `${(index * 17 + 4) % 100}%`,
              '--delay': `${index * -1.1}s`,
              '--duration': `${9 + (index % 5) * 2}s`,
            }}
          >
            {index % 3 === 0 ? '♡' : '♥'}
          </span>
        ))}
      </div>

      {stage === 'intro' && (
        <section className="intro-screen">
          <div className={`intro-heart ${messageVisible ? 'heart-open' : ''}`}>
            ♡
          </div>

          <div className="ornament">
            <span />
            <b>✧</b>
            <span />
          </div>

          <p
            key={messageIndex}
            className={`intro-message ${
              messageVisible ? 'message-in' : 'message-out'
            }`}
          >
            {openingMessages[messageIndex]}
          </p>

          <div className="intro-dots">
            {openingMessages.map((_, index) => (
              <span
                key={index}
                className={index === messageIndex ? 'active' : ''}
              />
            ))}
          </div>

          <p className="intro-footer">a little journey through us</p>
        </section>
      )}

      {stage === 'memories' && (
        <section className="gallery-screen">
          <header className="gallery-header">
            <p className="eyebrow">A LITTLE JOURNEY THROUGH US</p>
            <h1 className="gallery-heading">
              Our Memories <span className="heading-heart">♡</span>
            </h1>
            <div className="header-line" />
          </header>

          <div
            className={`memory-layout ${
              transitioning ? 'page-changing' : ''
            }`}
          >
            <div className={`photo-side ${photoMoved ? 'photo-moved' : ''}`}>
              <div className="polaroid">
                <div className="photo-frame">
                  {!imageFailed ? (
                    <img
                      key={memories[memoryIndex].image}
                      className="memory-photo"
                      src={memories[memoryIndex].image}
                      alt={memories[memoryIndex].title}
                      onError={() => setImageFailed(true)}
                    />
                  ) : (
                    <div className="image-error">
                      <span>♡</span>
                      <p>Photo not found</p>
                      <small>
                        Check that {memories[memoryIndex].image} is inside your
                        public folder.
                      </small>
                    </div>
                  )}

                  <span className="photo-shimmer" />
                </div>

                <p className="photo-caption">
                  {memories[memoryIndex].title}
                </p>

                <span className="tape tape-left" />
                <span className="tape tape-right" />
                <span className="photo-sparkle sparkle-one">✧</span>
                <span className="photo-sparkle sparkle-two">✦</span>
              </div>
            </div>

            <div
              className={`memory-story ${
                photoMoved ? 'story-visible' : ''
              }`}
            >
              <div className="story-decoration">
                <span>✧</span> &nbsp; ♡ &nbsp; <span>✧</span>
              </div>

              <h2 key={`title-${memoryIndex}`} className="story-title">
                {memories[memoryIndex].title}
              </h2>

              <div className="story-lines">
                {memories[memoryIndex].lines.map((line, index) => (
                  <p
                    key={`${memoryIndex}-${index}`}
                    className={`story-line ${
                      index < visibleLines ? 'line-visible' : ''
                    }`}
                  >
                    <span className="line-heart">♡</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              <div className="memory-counter">
                <span className="counter-current">
                  {String(memoryIndex + 1).padStart(2, '0')}
                </span>
                <span className="counter-divider"> / </span>
                <span>{String(memories.length).padStart(2, '0')}</span>
              </div>

              <div className="progress-track">
                <span
                  className="progress-fill"
                  style={{
                    width: `${((memoryIndex + 1) / memories.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <p className="gallery-footer">
            <span>♡</span> little moments, forever treasured <span>♡</span>
          </p>
        </section>
      )}

      {stage === 'finished' && (
        <section className="finished-screen">
          <div className="ending-hearts" aria-hidden="true">
            <span>♡</span>
            <span>♥</span>
            <span>♡</span>
            <span>♥</span>
            <span>♡</span>
          </div>

          <div className="finished-heart">♡</div>
          <p className="eyebrow">AND THESE MEMORIES...</p>

          <h1>
            Will Always Have
            <br />
            A Place in My Heart <span>❤️</span>
          </h1>

          <p className="finished-message">
            Some moments become memories. Some memories become a part of us.
            And some people leave a mark on our hearts that time cannot erase.
          </p>

          <p className="finished-note">
            Thank you for being a part of my story. 🌙
          </p>

          <button
            className="next-button"
            onClick={() => navigate('/feelings')}
          >
            Continue to My Feelings <span>♡ →</span>
          </button>
        </section>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        .memories-page {
          position: relative;
          isolation: isolate;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          color: #fff0f4;
          background:
            radial-gradient(ellipse at 50% -15%, #67213e 0%, transparent 55%),
            linear-gradient(145deg, #16070e, #2b0c1c 55%, #10060c);
          font-family: Georgia, 'Times New Roman', serif;
        }

        .background-orb {
          position: absolute;
          z-index: -2;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .2;
          pointer-events: none;
          animation: orb-drift 12s ease-in-out infinite alternate;
        }

        .orb-one {
          background: #ff4e8c;
          top: -140px;
          left: -80px;
        }

        .orb-two {
          background: #b52e67;
          right: -100px;
          bottom: -130px;
          animation-delay: -5s;
        }

        .orb-three {
          width: 170px;
          height: 170px;
          background: #e887a8;
          top: 45%;
          left: 42%;
          opacity: .08;
          animation-delay: -8s;
        }

        @keyframes orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(35px, 25px) scale(1.15); }
        }

        .star-field,
        .heart-field {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .star {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          background: #ffd9e6;
          box-shadow: 0 0 9px #ff9fbd;
          opacity: .25;
          animation: twinkle 2.8s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes twinkle {
          0%, 100% { opacity: .15; transform: scale(.7); }
          50% { opacity: .9; transform: scale(1.6); }
        }

        .heart-field span {
          position: absolute;
          left: var(--left);
          bottom: -35px;
          color: #ff91b3;
          font-size: 19px;
          opacity: 0;
          animation: heart-rise var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        @keyframes heart-rise {
          0% { transform: translateY(0) rotate(0) scale(.7); opacity: 0; }
          15% { opacity: .45; }
          80% { opacity: .3; }
          100% { transform: translateY(-110vh) rotate(35deg) scale(1.2); opacity: 0; }
        }

        .intro-screen {
          width: min(780px, 100%);
          text-align: center;
          padding: 20px 8px;
        }

        .intro-heart {
          margin-bottom: 12px;
          color: #ff9cba;
          font-size: 55px;
          opacity: .3;
          transform: scale(.6);
        }

        .intro-heart.heart-open {
          animation: heart-bloom 1.1s cubic-bezier(.2,.8,.2,1) both,
                     heart-beat 2.2s 1.1s ease-in-out infinite;
        }

        @keyframes heart-bloom {
          0% { opacity: 0; transform: scale(.1) rotate(-30deg); filter: blur(8px); }
          65% { opacity: 1; transform: scale(1.25) rotate(8deg); filter: blur(0); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }

        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.09); }
        }

        .ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 22px;
          color: #f5a5bd;
        }

        .ornament span {
          width: 65px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f4a4bd);
        }

        .ornament span:last-child { transform: rotate(180deg); }
        .ornament b { font-size: 19px; font-weight: normal; }

        .intro-message {
          min-height: 145px;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: pre-line;
          color: #ffe7ee;
          font-size: clamp(25px, 4vw, 41px);
          line-height: 1.6;
          text-shadow: 0 0 24px #f06d9b55;
          transition: opacity .65s ease, transform .65s ease, filter .65s ease;
        }

        .message-in {
          animation: letter-reveal .9s cubic-bezier(.2,.7,.2,1) both;
        }

        .message-out {
          opacity: 0;
          transform: translateY(-12px);
          filter: blur(5px);
        }

        @keyframes letter-reveal {
          from { opacity: 0; transform: translateY(22px); filter: blur(7px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .intro-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .intro-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #754056;
          transition: all .4s ease;
        }

        .intro-dots span.active {
          width: 24px;
          border-radius: 8px;
          background: #ff9fbd;
          box-shadow: 0 0 12px #ff9fbd88;
        }

        .intro-footer {
          margin-top: 36px;
          color: #c9849d;
          font-size: 11px;
          letter-spacing: 3px;
          font-style: italic;
        }

        .gallery-screen {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          max-height: 100%;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          text-align: center;
          animation: screen-arrive .9s ease both;
        }

        @keyframes screen-arrive {
          from { opacity: 0; filter: blur(8px); }
          to { opacity: 1; filter: blur(0); }
        }

        .gallery-header {
          flex: 0 0 auto;
          padding: 2px 0 12px;
        }

        .eyebrow {
          margin: 0 0 8px;
          color: #e9a2b8;
          font-size: 10px;
          letter-spacing: 4px;
        }

        .gallery-heading {
          margin: 0;
          color: #fff0f4;
          font-size: clamp(32px, 4vw, 46px);
          font-weight: normal;
          text-shadow: 0 0 25px #ed6c9744;
        }

        .heading-heart {
          display: inline-block;
          color: #ff9cba;
          animation: heart-beat 2s ease-in-out infinite;
        }

        .header-line {
          width: 75px;
          height: 1px;
          margin: 10px auto 0;
          background: linear-gradient(90deg, transparent, #d77798, transparent);
        }

        .memory-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(18px, 3.5vw, 50px);
          width: 100%;
          flex: 1;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          margin: 0 auto;
          transition: opacity .65s ease, transform .65s ease, filter .65s ease;
        }

        .memory-layout.page-changing {
          opacity: 0;
          transform: scale(.97);
          filter: blur(7px);
        }

        .photo-side {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          padding: 4px;
          transform: translateX(0) rotate(-2deg);
          transition: transform 1s cubic-bezier(.2,.8,.2,1);
        }

        .photo-side.photo-moved {
          transform: translateX(-8px) rotate(-1deg);
        }

        .polaroid {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: fit-content;
          height: fit-content;
          max-width: 100%;
          max-height: 100%;
          min-width: 0;
          min-height: 0;
          margin: 0 auto;
          padding: 0;
          overflow: visible;
          background: #f9e9ee;
          border-radius: 2px;
          box-shadow: 0 18px 45px #0008, 0 0 0 1px #fff4;
          animation: photo-develop 1.2s cubic-bezier(.16,1,.3,1) both;
          transform-origin: center;
        }

        @keyframes photo-develop {
          0% { opacity: 0; transform: scale(.88) rotate(3deg); filter: blur(9px); }
          65% { opacity: 1; transform: scale(1.025) rotate(-1deg); filter: blur(0); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }

        .photo-frame {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 0;
          min-height: 0;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: transparent;
          line-height: 0;
        }

        .memory-photo {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: calc(100dvh - 185px);
          object-fit: contain;
          object-position: center;
          margin: 0;
          padding: 0;
          border: 0;
          animation: photo-focus 1.5s ease both, photo-breathe 7s 1.5s ease-in-out infinite;
        }

        @keyframes photo-focus {
          from { opacity: 0; transform: scale(1.06); filter: saturate(.65) blur(4px); }
          to { opacity: 1; transform: scale(1); filter: saturate(1) blur(0); }
        }

        @keyframes photo-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.025); }
        }

        .photo-shimmer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, transparent 25%, #ffffff55 48%, transparent 68%);
          transform: translateX(-130%);
          animation: shimmer 1.7s 1s ease-out both;
        }

        @keyframes shimmer {
          to { transform: translateX(130%); }
        }

        .photo-caption {
          flex-shrink: 0;
          width: 100%;
          margin: 0;
          padding: 9px 5px;
          color: #873952;
          background: #f9e9ee;
          font-size: clamp(14px, 1.5vw, 18px);
          font-style: italic;
          text-align: center;
          line-height: 1.3;
        }

        .tape {
          position: absolute;
          z-index: 3;
          top: -8px;
          width: 58px;
          height: 17px;
          background: #f6b5c4b8;
          box-shadow: 0 2px 5px #0001;
          pointer-events: none;
        }

        .tape-left { left: 20px; transform: rotate(-20deg); }
        .tape-right { right: 20px; transform: rotate(18deg); }

        .photo-sparkle {
          position: absolute;
          color: #ffc1d3;
          z-index: 4;
          pointer-events: none;
          text-shadow: 0 0 12px #ff9ebc;
          animation: sparkle-pop 2.8s ease-in-out infinite;
        }

        .sparkle-one { top: 15%; right: -15px; font-size: 24px; }
        .sparkle-two { bottom: 25%; left: -13px; font-size: 17px; animation-delay: -1.2s; }

        @keyframes sparkle-pop {
          0%, 100% { opacity: .25; transform: scale(.65) rotate(0); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }

        .image-error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: min(100%, 350px);
          min-height: 220px;
          padding: 20px;
          color: #ffe5ed;
          background: #32101e;
          text-align: center;
          line-height: 1.5;
        }

        .image-error span { font-size: 45px; }
        .image-error p { margin: 10px 0 5px; }
        .image-error small { font-size: 12px; overflow-wrap: anywhere; }

        .memory-story {
          min-width: 0;
          max-width: 100%;
          max-height: 100%;
          overflow: hidden;
          padding: 20px 5px;
          text-align: left;
          opacity: 0;
          transform: translateX(35px);
          transition: opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1);
        }

        .memory-story.story-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .story-decoration {
          color: #f3a0b8;
          font-size: 22px;
          margin-bottom: 18px;
          letter-spacing: 3px;
          animation: decoration-glow 3s ease-in-out infinite;
        }

        .story-decoration span {
          display: inline-block;
          animation: sparkle-pop 2.5s ease-in-out infinite;
        }

        @keyframes decoration-glow {
          0%, 100% { text-shadow: 0 0 2px #f3a0b8; }
          50% { text-shadow: 0 0 16px #ff8db2; }
        }

        .story-title {
          margin: 0 0 26px;
          color: #ffd9e4;
          font-size: clamp(30px, 3.3vw, 40px);
          font-weight: normal;
          line-height: 1.4;
          text-shadow: 0 0 20px #e65a8a35;
          animation: title-unfold .85s ease both;
        }

        @keyframes title-unfold {
          from { opacity: 0; transform: translateY(14px); letter-spacing: 2px; }
          to { opacity: 1; transform: translateY(0); letter-spacing: 0; }
        }

        /* LARGER SUBTEXT AND MORE SPACE FOR ALL MEMORIES */
        .story-lines {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-line {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin: 0;
          color: #fce7ee;
          font-size: clamp(22px, 2.1vw, 28px);
          line-height: 1.95;
          font-weight: 500;
          opacity: 0;
          transform: translateY(18px);
          filter: blur(3px);
          transition:
            opacity .8s ease,
            transform .8s ease,
            filter .8s ease;
          overflow-wrap: anywhere;
        }

        .story-line.line-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .line-heart {
          flex: 0 0 auto;
          margin-top: 5px;
          color: #ff9cba;
          font-size: 25px;
          animation: heart-beat 2s ease-in-out infinite;
        }

        .memory-counter {
          margin-top: 22px;
          color: #b97a91;
          font-size: 14px;
          letter-spacing: 2px;
        }

        .counter-current { color: #ffabc3; }
        .counter-divider { color: #825066; margin: 0 6px; }

        .progress-track {
          width: min(180px, 80%);
          height: 2px;
          margin-top: 12px;
          background: #643047;
          overflow: hidden;
          border-radius: 4px;
        }

        .progress-fill {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #c65a80, #ffb4ca);
          box-shadow: 0 0 8px #ff9fbd;
          transition: width .8s ease;
        }

        .gallery-footer {
          flex: 0 0 auto;
          margin: 10px 0 0;
          color: #c98aa0;
          font-size: 11px;
          font-style: italic;
          letter-spacing: 1.5px;
        }

        .gallery-footer span {
          color: #ff9fbd;
          display: inline-block;
          animation: heart-beat 2s ease-in-out infinite;
        }

        .finished-screen {
          position: relative;
          width: min(700px, 100%);
          max-width: 100%;
          max-height: 100%;
          overflow: hidden;
          padding: 25px 10px;
          text-align: center;
          animation: ending-arrive 1.4s ease both;
        }

        @keyframes ending-arrive {
          from { opacity: 0; transform: scale(.94); filter: blur(8px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        .finished-heart {
          color: #ff9fba;
          font-size: 58px;
          animation: heart-bloom 1.2s ease both, heart-beat 2s 1.2s ease-in-out infinite;
          text-shadow: 0 0 25px #fa779d88;
          margin-bottom: 18px;
        }

        .finished-screen h1 {
          margin: 15px 0 25px;
          color: #ffe4eb;
          font-size: clamp(30px, 5vw, 46px);
          font-weight: normal;
          line-height: 1.5;
          text-shadow: 0 0 25px #ed649044;
        }

        .finished-screen h1 span {
          display: inline-block;
          animation: heart-beat 1.8s ease-in-out infinite;
        }

        .finished-message {
          max-width: 570px;
          margin: 0 auto;
          color: #e9cbd5;
          font-size: 18px;
          line-height: 1.8;
        }

        .finished-note {
          margin: 22px 0 30px;
          color: #f3a7bd;
          font-style: italic;
          font-size: 18px;
        }

        .next-button {
          max-width: 100%;
          border: 1px solid #d87998;
          border-radius: 40px;
          padding: 14px 24px;
          color: #fff0f3;
          background: linear-gradient(135deg, #6d2442, #43152a);
          font-family: inherit;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 0 22px #e55c8730;
          animation: button-breathe 2.8s ease-in-out infinite;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .next-button:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 0 32px #e55c8780;
        }

        .next-button span { margin-left: 12px; color: #ffb4ca; }

        @keyframes button-breathe {
          0%, 100% { box-shadow: 0 0 15px #e55c8725; }
          50% { box-shadow: 0 0 28px #e55c8760; }
        }

        .ending-hearts span {
          position: absolute;
          color: #ff9fbd;
          opacity: 0;
          animation: ending-heart-rise 4s ease-in-out infinite;
        }

        .ending-hearts span:nth-child(1) { left: 12%; bottom: 10%; animation-delay: 0s; }
        .ending-hearts span:nth-child(2) { left: 28%; bottom: 4%; animation-delay: .8s; }
        .ending-hearts span:nth-child(3) { right: 17%; bottom: 8%; animation-delay: 1.4s; }
        .ending-hearts span:nth-child(4) { right: 30%; bottom: 3%; animation-delay: 2s; }
        .ending-hearts span:nth-child(5) { left: 50%; bottom: 0; animation-delay: 2.5s; }

        @keyframes ending-heart-rise {
          0% { opacity: 0; transform: translateY(10px) scale(.6); }
          30% { opacity: .6; }
          100% { opacity: 0; transform: translateY(-100px) scale(1.2) rotate(20deg); }
        }

        @media (max-width: 700px) {
          .memories-page {
            padding: 8px 12px;
          }

          .intro-heart { font-size: 45px; }

          .intro-message {
            min-height: 140px;
            font-size: clamp(22px, 6vw, 32px);
            line-height: 1.6;
          }

          .gallery-header { padding: 3px 0 8px; }
          .eyebrow { font-size: 9px; letter-spacing: 2px; }
          .gallery-heading { font-size: clamp(26px, 6vw, 36px); }
          .header-line { margin-top: 7px; }

          .memory-layout {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;
            min-height: 0;
            overflow: hidden;
          }

          .photo-side,
          .photo-side.photo-moved {
            flex: 1 1 55%;
            width: 100%;
            height: auto;
            min-height: 0;
            padding: 3px;
            transform: none;
          }

          .polaroid {
            width: fit-content;
            height: fit-content;
            max-width: 100%;
            max-height: 100%;
            padding: 0;
          }

          .memory-photo {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: calc(100dvh - 285px);
            object-fit: contain;
          }

          .photo-caption { padding: 6px 4px; font-size: 13px; }
          .tape { width: 43px; height: 13px; }
          .sparkle-one { font-size: 18px; right: -9px; }
          .sparkle-two { font-size: 14px; left: -8px; }

          .memory-story {
            flex: 0 1 42%;
            width: 100%;
            max-height: 42%;
            overflow: hidden;
            padding: 3px 5px;
            text-align: center;
          }

          .story-decoration { font-size: 15px; margin-bottom: 4px; }
          .story-title { font-size: 24px; margin-bottom: 8px; }

          /* Larger mobile subtext, with comfortable spacing */
          .story-lines {
            gap: 12px;
          }

          .story-line {
            gap: 8px;
            justify-content: center;
            font-size: clamp(17px, 4.5vw, 21px);
            line-height: 1.65;
          }

          .line-heart {
            font-size: 18px;
            margin-top: 2px;
          }

          .memory-counter { margin-top: 6px; font-size: 12px; }
          .progress-track { margin-top: 7px; }
          .gallery-footer { margin-top: 5px; font-size: 9px; }
          .finished-screen { padding: 15px 8px; }
          .finished-heart { font-size: 42px; margin-bottom: 10px; }

          .finished-screen h1 {
            font-size: clamp(27px, 7vw, 38px);
            margin: 10px 0 15px;
          }

          .finished-message { font-size: 15px; line-height: 1.7; }
          .finished-note { margin: 14px 0 20px; font-size: 16px; }
          .next-button { font-size: 14px; padding: 12px 18px; }
        }

        @media (max-height: 650px) and (min-width: 701px) {
          .gallery-header { padding: 0 0 5px; }
          .gallery-heading { font-size: 30px; }
          .eyebrow { margin-bottom: 4px; }
          .header-line { margin-top: 5px; }
          .memory-story { padding: 7px 5px; }
          .story-decoration { margin-bottom: 7px; }
          .story-title { font-size: 27px; margin-bottom: 10px; }

          .story-lines { gap: 12px; }

          .story-line {
            font-size: 20px;
            line-height: 1.65;
          }

          .memory-counter { margin-top: 10px; }
          .memory-photo { max-height: calc(100dvh - 145px); }
          .gallery-footer { margin-top: 5px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .memories-page *,
          .memories-page *::before,
          .memories-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  )
}
