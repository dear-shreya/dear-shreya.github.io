import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Gift, RotateCcw } from 'lucide-react'
import SectionShell from './SectionShell'

export default function FinalSurprise() {
  const [revealed, setRevealed] = useState(false)

  return (
    <SectionShell id="finale" eyebrow="The final chapter" title={!revealed ? 'One last thing...' : ''} className={`finale ${revealed ? 'finale--revealed' : ''}`}>
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button key="gift" className="final-button" type="button" onClick={() => setRevealed(true)} exit={{ opacity: 0, scale: 0.8 }}>
            <Gift size={22} /> Click me <Heart size={17} fill="currentColor" />
          </motion.button>
        ) : (
          <motion.div key="message" className="final-message" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="final-hearts" aria-hidden="true"><span>♥</span><span>✦</span><span>♥</span><span>✧</span></div>
            <h2>Happy Birthday,<br /><em>Shreya...</em> <Heart size={34} fill="currentColor" /></h2>
            <p className="final-message__aside">Today is all yours.<br /><span>(vaise dekha jaaye toh meri life mein toh har din hi tera hai)</span></p>
            <p className="final-message__wish">Here’s to a lifetime of your beautiful smile,<br />your dreams, your adventures,<br />and us.</p>
            <div className="final-message__signature">With love,<strong>Aditya</strong></div>
            <button className="text-button restart-button" type="button" onClick={() => { setRevealed(false); document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <RotateCcw size={14} /> Replay the little journey
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  )
}
