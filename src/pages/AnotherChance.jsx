
import React, { useState } from "react";

export default function AnotherChance() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="chance-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          overflow: hidden;
        }

        .chance-page {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 24px;
          text-align: center;
          color: #f9e8e9;
          background:
            radial-gradient(ellipse at 50% 15%, #63212f 0%, transparent 55%),
            linear-gradient(135deg, #32131d, #421722 55%, #2b111a);
          font-family: 'Playfair Display', Georgia, serif;
        }

        .chance-page::before {
          content: "♡";
          position: absolute;
          top: 3%;
          left: 4%;
          color: rgba(255, 222, 225, 0.07);
          font-size: clamp(55px, 9vw, 100px);
          transform: rotate(-20deg);
          pointer-events: none;
        }

        .chance-page::after {
          content: "♡";
          position: absolute;
          bottom: 3%;
          right: 4%;
          color: rgba(255, 222, 225, 0.07);
          font-size: clamp(70px, 11vw, 130px);
          transform: rotate(18deg);
          pointer-events: none;
        }

        .chance-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 900px;
          max-height: 100%;
          margin: auto;
          overflow: hidden;
          animation: chanceAppear 0.9s ease both;
        }

        @keyframes chanceAppear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chance-heading {
          margin: 0 auto clamp(18px, 3vh, 30px);
          color: #ffe3e7;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(40px, 6.2vw, 72px);
          font-weight: 400;
          line-height: 1.2;
          text-shadow: 0 0 25px rgba(255, 190, 205, 0.12);
        }

        /* Larger introduction text */
        .chance-paragraph {
          max-width: 780px;
          margin: 0 auto clamp(12px, 2vh, 19px);
          color: #f3dfe2;
          font-size: clamp(16px, 1.9vw, 21px);
          line-height: 1.8;
          font-weight: 400;
        }

        .chance-question {
          margin: clamp(16px, 2.5vh, 25px) 0 12px;
          color: #ffccd5;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(38px, 5vw, 52px);
          font-weight: 400;
          line-height: 1.25;
        }

        .chance-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 12px;
        }

        .answer-button {
          min-width: 125px;
          padding: 12px 30px;
          border: 1px solid #e6a0ad;
          border-radius: 40px;
          background: linear-gradient(135deg, #8f394c, #b45a6b);
          color: #fff4f4;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .answer-button:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #b45a6b, #ce7887);
          box-shadow: 0 8px 24px rgba(224, 128, 148, 0.2);
        }

        .answer-button:active {
          transform: scale(0.96);
        }

        .yes-button {
          background: linear-gradient(135deg, #a44259, #c26378);
        }

        .no-button {
          background: transparent;
          border-color: rgba(255, 219, 225, 0.65);
        }

        .no-button:hover {
          background: rgba(255, 220, 228, 0.1);
        }

        .answer-message {
          width: 100%;
          max-width: 800px;
          margin: auto;
          padding: 8px;
          animation: messageAppear 0.7s ease both;
        }

        @keyframes messageAppear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message-heart {
          display: block;
          margin-bottom: 12px;
          font-size: 35px;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        .answer-message h2 {
          margin: 0 auto 20px;
          color: #ffd6df;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(42px, 5.5vw, 60px);
          font-weight: 400;
          line-height: 1.3;
        }

        /* Larger response subtext with more vertical spacing */
        .answer-message p {
          max-width: 760px;
          margin: 0 auto clamp(13px, 2vh, 20px);
          color: #f7e3e6;
          font-size: clamp(16px, 1.85vw, 21px);
          line-height: 1.85;
          font-weight: 400;
        }

        .prayer-line {
          color: #ffd1dc !important;
          font-style: italic;
          font-size: clamp(17px, 2vw, 22px) !important;
          line-height: 1.8 !important;
        }

        .try-again-button {
          margin-top: 10px;
          padding: 10px 22px;
          border: 1px solid rgba(255, 220, 225, 0.6);
          border-radius: 30px;
          background: transparent;
          color: #ffe5e9;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .try-again-button:hover {
          background: rgba(255, 220, 225, 0.1);
        }

        /* Mobile screens */
        @media (max-width: 600px) {
          .chance-page {
            padding: 14px;
          }

          .chance-heading {
            font-size: clamp(37px, 9.5vw, 52px);
            margin-bottom: 19px;
          }

          .chance-paragraph {
            font-size: clamp(15px, 4vw, 18px);
            line-height: 1.6;
            margin-bottom: 12px;
          }

          .chance-question {
            font-size: 38px;
            margin: 16px 0 10px;
          }

          .chance-buttons {
            gap: 12px;
          }

          .answer-button {
            min-width: 105px;
            padding: 10px 22px;
            font-size: 15px;
          }

          .answer-message h2 {
            font-size: 43px;
            margin-bottom: 14px;
          }

          .answer-message p {
            font-size: 15px;
            line-height: 1.55;
            margin-bottom: 10px;
          }

          .prayer-line {
            font-size: 16px !important;
            line-height: 1.55 !important;
          }
        }

        /* Short laptop screens: preserve the no-scroll layout */
        @media (max-height: 650px) {
          .chance-page {
            padding: 8px 18px;
          }

          .chance-heading {
            font-size: clamp(31px, 4.8vw, 45px);
            margin-bottom: 8px;
          }

          .chance-paragraph {
            font-size: 15px;
            line-height: 1.45;
            margin-bottom: 7px;
          }

          .chance-question {
            font-size: 32px;
            margin: 8px 0 5px;
          }

          .answer-button {
            padding: 8px 22px;
          }

          .answer-message h2 {
            font-size: 37px;
            margin-bottom: 8px;
          }

          .answer-message p {
            font-size: 14px;
            line-height: 1.4;
            margin-bottom: 6px;
          }

          .prayer-line {
            font-size: 15px !important;
            line-height: 1.4 !important;
          }

          .message-heart {
            margin-bottom: 4px;
          }

          .try-again-button {
            margin-top: 5px;
            padding: 7px 15px;
          }
        }

        @media (max-height: 500px) {
          .chance-page {
            padding: 5px 12px;
          }

          .chance-heading {
            font-size: 30px;
            margin-bottom: 5px;
          }

          .chance-paragraph {
            font-size: 13px;
            line-height: 1.3;
            margin-bottom: 4px;
          }

          .chance-question {
            font-size: 27px;
            margin: 5px 0 4px;
          }

          .answer-message h2 {
            font-size: 32px;
            margin-bottom: 5px;
          }

          .answer-message p {
            font-size: 12px;
            line-height: 1.3;
            margin-bottom: 4px;
          }

          .prayer-line {
            font-size: 13px !important;
            line-height: 1.3 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chance-page *,
          .chance-page *::before,
          .chance-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="chance-content">
        {answer === "" && (
          <>
            <h1 className="chance-heading">
              Would you give us another
              <br />
              chance?
            </h1>

            <p className="chance-paragraph">
              I know I can't change yesterday
            </p>

            <p className="chance-paragraph">
              But if life ever gives us another opportunity...
            </p>

            <p className="chance-paragraph">
              I'd choose to understand you better, love you better,
              and cherish every little moment with you
            </p>

            <p className="chance-paragraph">
              No matter what your answer is, thank you for reading
              every page of my heart ❤️
            </p>

            <h2 className="chance-question">One More Chance ♡</h2>

            <div className="chance-buttons">
              <button
                type="button"
                className="answer-button yes-button"
                onClick={() => setAnswer("yes")}
              >
                Yes ❤️
              </button>

              <button
                type="button"
                className="answer-button no-button"
                onClick={() => setAnswer("no")}
              >
                No 🥺
              </button>
            </div>
          </>
        )}

        {answer === "yes" && (
          <div className="answer-message">
            <span className="message-heart"></span>

            <h2>Thank You My Love ❤️</h2>

            <p>
              You have no idea how happy this makes me
            </p>

            <p>
              Sending you lots and lots of hugss, my love ❤️
            </p>

            <p>
              I hope we can create beautiful memories together again,
              one little moment at a time
            </p>

            <p>Love you so much ❤️</p>
          </div>
        )}

        {answer === "no" && (
          <div className="answer-message">
            <span className="message-heart">🥺💗</span>

            <h2>Can You Please Think Again?</h2>

            <p>
              Please think once again about your short little girl
            </p>

            <p>
              I know I can't change the past, but my heart still wishes
              for one more chance with you
            </p>

            <p>
              You will always have a special place in my heart, and
              the memories we shared will always mean so much to me
            </p>

            <p>
              I respect your decision, my love. My love for you never
              fades, and I will always be grateful that you were a part
              of my life
            </p>

            <p className="prayer-line">
              When my arms can't hug you, I hope my prayers do hug you ❤️
            </p>

            <p>
              No matter where life takes us, I will always wish the
              best for you. You deserve love, peace, and all the
              happiness in this world
            </p>

            <p>
              Even if I cannot be the person beside you, I will
              genuinely hope that life gives you every reason to smile
            </p>

            <p>
              I wish you always to be happy, my love ❤️
            </p>

            <button
              type="button"
              className="try-again-button"
              onClick={() => setAnswer("")}
            >
              Back ♡
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
