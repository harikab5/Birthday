import { useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'

/*
  Optional music:
  1. Add your licensed/owned MP3 to public/music/our-song.mp3
  2. Uncomment the audio element below and update the source.
  3. Music starts only after the visitor clicks the button.
*/
export default function MusicToggle() {
  const [enabled, setEnabled] = useState(false)

  const toggleMusic = () => {
    // This is a visual toggle until you add your own audio file.
    setEnabled((current) => !current)
  }

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="fixed right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-rosewood/80 px-3 py-2 text-xs text-rose-100/80 shadow-lg backdrop-blur transition hover:border-pink-200/50 hover:text-white"
      aria-pressed={enabled}
      title="Optional music control"
    >
      {enabled ? <Music2 size={15} /> : <VolumeX size={15} />}
      {enabled ? 'Music on' : 'Music off'}
    </button>
  )
}
