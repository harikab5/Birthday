# A Little Piece of My Heart — Birthday Website

A six-page romantic birthday website built with React, React Router, and Tailwind CSS.

## Run it locally

1. Install Node.js (LTS) if you don't already have it: https://nodejs.org/
2. Extract this folder and open a terminal inside it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Personalize it

- Change the nickname and sign-off in the page files under `src/pages/`.
- Replace the memory cards in `Memories.jsx` with your real photos. Put images in `public/images/` and use paths like `/images/our-photo-1.jpg`.
- Change the messages so they reflect your real relationship and memories.
- Optional: add a song file to `public/music/` and connect it to a user-clicked audio player. Browsers generally block autoplay, so don't force music to start.
- Update the contact link in `Question.jsx` to your preferred way of talking (for example, a WhatsApp chat link). Use a link you are comfortable sharing.

## Pages

1. `/` — a mysterious welcome
2. `/birthday` — birthday wishes
3. `/memories` — shared memories
4. `/feelings` — an honest letter
5. `/another-chance` — a hopeful message
6. `/question` — the final question

The navigation buttons take the visitor through the story. The last page offers a gentle invitation to talk rather than demanding an answer.
