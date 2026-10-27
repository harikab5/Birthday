const hearts = [
  { left: '7%', top: '16%', delay: '0s', size: 'text-lg' },
  { left: '88%', top: '22%', delay: '1.4s', size: 'text-2xl' },
  { left: '14%', top: '73%', delay: '2.2s', size: 'text-sm' },
  { left: '80%', top: '78%', delay: '.7s', size: 'text-lg' },
  { left: '51%', top: '8%', delay: '3s', size: 'text-sm' },
  { left: '93%', top: '54%', delay: '1.8s', size: 'text-sm' },
]

export default function FloatingHearts() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`absolute animate-float select-none text-pink-200/[0.18] ${heart.size}`}
          style={{ left: heart.left, top: heart.top, animationDelay: heart.delay }}
        >
          ♥
        </span>
      ))}
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-[110px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-rose-300/10 blur-[110px]" />
    </div>
  )
}
