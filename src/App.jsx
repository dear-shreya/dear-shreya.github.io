import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import BirthdayCake from './components/BirthdayCake'
import Story from './components/Story'
import PhotoGallery from './components/PhotoGallery'
import LoveCards from './components/LoveCards'
import FinalSurprise from './components/FinalSurprise'
import MusicButton from './components/MusicButton'

export default function App() {
  const [opened, setOpened] = useState(false)

  const beginJourney = () => {
    setOpened(true)
    window.setTimeout(() => document.getElementById('birthday')?.scrollIntoView({ behavior: 'smooth' }), 120)
  }

  return (
    <main id="top" className="vintage-paper">
      <Hero onOpen={beginJourney} />
      <AnimatePresence>
        {opened && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <BirthdayCake />
            <Story />
            <PhotoGallery />
            <LoveCards />
            <FinalSurprise />
            <footer>Made for Shreya, with all my heart · Aditya</footer>
          </motion.div>
        )}
      </AnimatePresence>
      <MusicButton visible />
    </main>
  )
}
