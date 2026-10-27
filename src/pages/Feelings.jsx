
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const letterGroups = [
  [
    "I don't really know where to begin, because there are so many things my heart still wants to tell you. ❤️",
    "Sometimes, I wish I could go back to those little moments we shared and live them all over again, even if only for a little while.",
    "I never imagined that someone could become such a special part of my life and leave so many beautiful memories behind. ",
  ],
  [
    "I know that things haven't been the same between us, and maybe there are things I could have done differently.",
    "If I ever hurt you, made you feel unimportant, or failed to understand you when you needed me, I'm truly sorry. 💔",
    "I can't change the past, but I can honestly acknowledge my mistakes and learn from them.",
  ],
  [
    "No matter how much time passes, the memories we made will always mean something special to me. ❤️",
    "I miss the little things  the conversations, the laughter, the comfort, and the happiness of having you in my life.",
    "Sometimes, the simplest moments become the ones we wish we could return to the most. 🌙",
  ],
  [
    "I'm not writing this to pressure you or to make you feel that you owe me anything.",
    "I just wanted you to know that what we shared mattered to me, and the feelings I have are something I wanted to express honestly.",
    "Whatever happens next, I will always be grateful for the beautiful moments that became a part of my story. 🤍",
  ],
];

const floatingHearts = [
  { left: "7%", top: "15%", delay: "0s", size: "18px" },
  { left: "89%", top: "18%", delay: "1.5s", size: "14px" },
  { left: "12%", top: "75%", delay: "2.5s", size: "13px" },
  { left: "92%", top: "78%", delay: "0.8s", size: "20px" },
  { left: "48%", top: "8%", delay: "1.8s", size: "11px" },
  { left: "75%", top: "88%", delay: "3s", size: "15px" },
];

export default function Feelings() {
  const navigate = useNavigate();
  const [currentGroup, setCurrentGroup] = useState(0);
  const [showEnd, setShowEnd] = useState(false);

  const handleNext = () => {
    if (currentGroup < letterGroups.length - 1) {
      setCurrentGroup((previous) => previous + 1);
    } else {
      setShowEnd(true);
    }
  };

  const handleRestart = () => {
    setCurrentGroup(0);
    setShowEnd(false);
  };

  return (
    <div className="feelings-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .feelings-page,
        .feelings-page * {
          box-sizing: border-box;
        }

        .feelings-page {
          --paper: #f5e8d0;
          --ink: #573b35;

          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 440px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          color: var(--ink);
          background:
            radial-gradient(ellipse at 15% 20%, #7b303b 0%, transparent 38%),
            radial-gradient(ellipse at 85% 80%, #3a151f 0%, transparent 40%),
            linear-gradient(135deg, #210e16, #4a1c29 55%, #230e17);
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .feelings-page::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(239, 204, 162, 0.24);
          border-radius: 5px;
          pointer-events: none;
        }

        .feelings-page::after {
          content: "♡";
          position: absolute;
          right: 4%;
          top: 3%;
          font-size: clamp(80px, 14vw, 180px);
          color: rgba(255, 223, 205, 0.055);
          transform: rotate(15deg);
          pointer-events: none;
        }

        .floating-heart {
          position: absolute;
          z-index: 0;
          color: rgba(255, 203, 190, 0.35);
          animation: heartFloat 6s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes heartFloat {
          0%, 100% {
            transform: translateY(0) rotate(-8deg);
            opacity: 0.25;
          }

          50% {
            transform: translateY(-17px) rotate(8deg);
            opacity: 0.7;
          }
        }

        .letter-paper {
          position: relative;
          isolation: isolate;
          z-index: 1;
          width: min(920px, 100%);
          height: min(690px, calc(100dvh - 60px));
          min-height: 400px;
          padding: clamp(20px, 3vw, 32px);
          border: 1px solid #d4b88e;
          border-radius: 3px;
          background:
            radial-gradient(ellipse at 0% 0%, rgba(170, 115, 66, 0.10), transparent 40%),
            radial-gradient(ellipse at 100% 100%, rgba(170, 115, 66, 0.10), transparent 40%),
            repeating-linear-gradient(
              0deg,
              rgba(130, 87, 52, 0.025) 0px,
              rgba(130, 87, 52, 0.025) 1px,
              transparent 1px,
              transparent 4px
            ),
            var(--paper);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.35),
            inset 0 0 45px rgba(132, 86, 46, 0.08);
          animation: paperAppear 1s ease both;
        }

        @keyframes paperAppear {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Heart-shaped memory photos */
        .corner-photos {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .corner-photo {
          position: absolute;
          display: block;
          width: clamp(90px, 11vw, 125px);
          height: clamp(90px, 11vw, 125px);
          object-fit: cover;
          object-position: center;

          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='white' d='M50 92 C42 84 4 59 4 30 C4 14 16 5 30 5 C40 5 47 11 50 21 C53 11 60 5 70 5 C84 5 96 14 96 30 C96 59 58 84 50 92 Z'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='white' d='M50 92 C42 84 4 59 4 30 C4 14 16 5 30 5 C40 5 47 11 50 21 C53 11 60 5 70 5 C84 5 96 14 96 30 C96 59 58 84 50 92 Z'/%3E%3C/svg%3E");

          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;

          filter: drop-shadow(0 5px 8px rgba(40, 15, 20, 0.3));
          animation: heartPhotoFloat 4s ease-in-out infinite;
        }

        .heart-top-left {
          top: -20px;
          left: -20px;
          object-position: center 35%;
          transform: rotate(-12deg);
        }

        .heart-bottom-right {
          bottom: -20px;
          right: -20px;
          object-position: center 35%;
          transform: rotate(12deg);
          animation-delay: 1s;
        }

        @keyframes heartPhotoFloat {
          0%, 100% {
            translate: 0 0;
          }

          50% {
            translate: 0 -6px;
          }
        }

        .letter-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(145, 93, 62, 0.3);
          padding: clamp(12px, 2.5vw, 26px);
        }

        .letter-header {
          text-align: center;
          flex-shrink: 0;
        }

        .letter-kicker {
          margin: 0 0 2px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #9a6a54;
        }

        .letter-heading {
          margin: 0;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.15;
          font-weight: 400;
          color: #78323c;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .letter-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 7px auto 12px;
          color: #a35b60;
        }

        .letter-divider span {
          width: clamp(35px, 9vw, 85px);
          height: 1px;
          background: linear-gradient(90deg, transparent, #bd8a78);
        }

        .letter-divider span:last-child {
          transform: rotate(180deg);
        }

        .letter-divider b {
          font-size: 15px;
          font-weight: 400;
        }

        .letter-content {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(8px, 1.7vh, 16px);
          padding: 2px 0;
          animation: textReveal 0.7s ease both;
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .letter-paragraph {
          margin: 0;
          font-size: clamp(15px, 1.8vw, 21px);
          line-height: 1.42;
          text-align: center;
          color: #573b35;
          font-weight: 500;
        }

        .letter-bottom {
          flex-shrink: 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 14px;
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid rgba(145, 93, 62, 0.2);
        }

        .letter-controls {
          grid-column: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-width: 0;
        }

        .page-counter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 10px;
          letter-spacing: 2px;
          color: #9a6a54;
          text-transform: uppercase;
          text-align: center;
        }

        .next-button {
          display: block;
          margin: 0 auto;
          padding: 11px 22px;
          border: 1px solid #8e4148;
          border-radius: 30px;
          background: linear-gradient(135deg, #7b303b, #a64f58);
          color: #fff5e9;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.4px;
          cursor: pointer;
          box-shadow: 0 4px 12px #71323b30;
          transition: all 0.35s ease;
        }

        .next-button:hover {
          background: linear-gradient(135deg, #a64f58, #c16b70);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 7px 20px #71323b45;
        }

        .next-button:active {
          transform: scale(0.96);
        }

        .restart-button {
          margin-top: 12px;
          padding: 9px 18px;
          border: 1px solid #9b5054;
          border-radius: 25px;
          background: #8e4148;
          color: #fff5e9;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13px;
          cursor: pointer;
          box-shadow: 0 3px 10px #71323b25;
          transition: all 0.3s ease;
        }

        .restart-button:hover {
          background: #b15c63;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px #71323b35;
        }

        .letter-signature {
          grid-column: 2;
          text-align: right;
          align-self: end;
          padding-bottom: 4px;
          color: #78323c;
        }

        .signature-small {
          margin: 0;
          font-size: 12px;
          font-style: italic;
          color: #99705b;
        }

        .signature-name {
          margin: 0;
          font-family: 'Great Vibes', cursive;
          font-size: 29px;
          line-height: 1.2;
          color: #78323c;
        }

        .continue-button {
          flex-shrink: 0;
          padding: 10px 22px;
          border: 1px solid #a65b61;
          border-radius: 30px;
          background: linear-gradient(135deg, #71303a, #984650);
          color: #fff5e9;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          cursor: pointer;
          box-shadow: 0 5px 16px #71323b30;
          transition: all 0.35s ease;
        }

        .continue-button span {
          margin-left: 8px;
          color: #ffe0dc;
        }

        .continue-button:hover {
          background: linear-gradient(135deg, #984650, #b96770);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 22px #71323b45;
        }

        .continue-button:active {
          transform: scale(0.97);
        }

        .closing-message {
          text-align: center;
          animation: textReveal 0.8s ease both;
        }

        .closing-heart {
          display: block;
          font-size: 28px;
          color: #a4515b;
          margin-bottom: 4px;
          animation: heartbeat 1.8s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.14);
          }
        }

        .closing-title {
          margin: 0 0 7px;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(30px, 4vw, 43px);
          font-weight: 400;
          color: #78323c;
        }

        .closing-text {
          max-width: 470px;
          margin: 0 auto;
          font-size: clamp(15px, 1.8vw, 20px);
          line-height: 1.5;
          color: #573b35;
        }

        @media (max-width: 600px) {
          .feelings-page {
            padding: 20px;
          }

          .letter-paper {
            height: calc(100dvh - 48px);
            min-height: 0;
            padding: 18px 12px;
          }

          .corner-photo {
            width: 75px;
            height: 75px;
          }

          .heart-top-left {
            top: -8px;
            left: -8px;
          }

          .heart-bottom-right {
            bottom: -8px;
            right: -8px;
          }

          .letter-inner {
            padding: 12px 10px;
          }

          .letter-kicker {
            font-size: 8px;
            letter-spacing: 2.5px;
          }

          .letter-heading {
            font-size: clamp(34px, 10vw, 45px);
          }

          .letter-divider {
            margin: 5px auto 8px;
          }

          .letter-content {
            gap: 10px;
          }

          .letter-paragraph {
            font-size: clamp(14px, 3.8vw, 18px);
            line-height: 1.35;
          }

          .letter-bottom {
            gap: 8px;
            margin-top: 7px;
          }

          .page-counter {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .next-button {
            padding: 9px 12px;
            font-size: 10px;
          }

          .restart-button {
            padding: 8px 13px;
            font-size: 11px;
          }

          .signature-small {
            font-size: 10px;
          }

          .signature-name {
            font-size: 22px;
          }

          .continue-button {
            padding: 9px 12px;
            font-size: 10px;
          }

          .closing-title {
            font-size: 34px;
          }

          .closing-text {
            font-size: 15px;
          }
        }

        @media (max-height: 560px) {
          .feelings-page {
            padding: 18px;
          }

          .letter-paper {
            height: calc(100dvh - 36px);
            padding: 18px;
          }

          .corner-photo {
            width: 65px;
            height: 65px;
          }

          .letter-inner {
            padding: 8px 14px;
          }

          .letter-heading {
            font-size: 34px;
          }

          .letter-divider {
            margin: 3px auto 6px;
          }

          .letter-paragraph {
            font-size: 14px;
            line-height: 1.25;
          }

          .letter-content {
            gap: 6px;
          }

          .letter-bottom {
            margin-top: 5px;
            padding-top: 5px;
          }

          .next-button {
            padding: 7px 15px;
            font-size: 11px;
          }

          .continue-button {
            padding: 7px 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feelings-page *,
          .feelings-page *::before,
          .feelings-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {floatingHearts.map((heart, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            fontSize: heart.size,
          }}
        >
          ♡
        </span>
      ))}

      <main className="letter-paper">
        <div className="corner-photos">
          <img
            src="/mylove.png"
            alt="Our memory"
            className="corner-photo heart-top-left"
          />

          <img
            src="/memory6.jpeg"
            alt="A special memory"
            className="corner-photo heart-bottom-right"
          />
        </div>

        <div className="letter-inner">
          <header className="letter-header">
            <p className="letter-kicker">A little piece of my heart</p>
            <h1 className="letter-heading">love letter</h1>

            <div className="letter-divider">
              <span />
              <b>♡</b>
              <span />
            </div>
          </header>

          <section
            className="letter-content"
            key={showEnd ? "ending" : currentGroup}
          >
            {!showEnd ? (
              letterGroups[currentGroup].map((paragraph, index) => (
                <p className="letter-paragraph" key={index}>
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="closing-message">
                <span className="closing-heart">♡</span>
                <h2 className="closing-title">From my heart to yours</h2>

                <p className="closing-text">
                  Some feelings are too special to leave unspoken.
                  Thank you for being a part of my story.
                  Whatever tomorrow holds, I wanted you to know that. ❤️
                </p>

                <button
                  className="restart-button"
                  onClick={handleRestart}
                  type="button"
                >
                  Read my letter again ↺
                </button>
              </div>
            )}
          </section>

          <footer className="letter-bottom">
            <div className="letter-controls">
              {!showEnd ? (
                <>
                  <span className="page-counter">
                    Page {currentGroup + 1} of {letterGroups.length}
                  </span>

                  <button
                    className="next-button"
                    onClick={handleNext}
                    type="button"
                  >
                    {currentGroup === letterGroups.length - 1
                      ? "turn the page ♡"
                      : "Turn the page ♡ →"}
                  </button>
                </>
              ) : (
                <>
                  <span className="page-counter">Written with love</span>

                  <button
                    className="continue-button"
                    onClick={() => navigate("/another-chance")}
                    type="button"
                  >
                    And one more thing…
                    <span>♡ →</span>
                  </button>
                </>
              )}
            </div>

            <div className="letter-signature">
              <p className="signature-small">With love,</p>
              <p className="signature-name">Me ♡</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
