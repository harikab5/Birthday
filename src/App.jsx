
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
 import FloatingHearts from './components/FloatingHearts'

import Home from './pages/Home'
import Birthday from './pages/Birthday'
import Memories from './pages/Memories'
import Feelings from './pages/Feelings'
import AnotherChance from './pages/AnotherChance'
import Question from './pages/Question'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.background = '#10080d'
    document.body.style.margin = '0'
    document.body.style.padding = '0'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={`app-shell ${
        isHome ? 'app-home' : 'app-inner-page'
      }`}
    >
      <FloatingHearts />

      <main
        className={
          isHome
            ? 'route-container home-route'
            : 'route-container'
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/feelings" element={<Feelings />} />
          <Route
            path="/another-chance"
            element={<AnotherChance />}
          />
          <Route path="/question" element={<Question />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
