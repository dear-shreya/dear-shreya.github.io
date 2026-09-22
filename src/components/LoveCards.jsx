import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import SectionShell from './SectionShell'
import ContinueButton from './ContinueButton'
import { siteContent } from '../data/siteContent'

export default function LoveCards() {
  const [index, setIndex] = useState(0)
  const [revealedThrough, setRevealedThrough] = useState(-1)
  const lastIndex = siteContent.loveNotes.length - 1
  const opened = index <= revealedThrough
  const allRevealed = revealedThrough === lastIndex

  const handleCard = () => {
    if (!opened) setRevealedThrough(index)
    else if (index < lastIndex) setIndex((current) => current + 1)
  }

  return (
    <SectionShell id="love-notes" eyebrow="Chapter four" title="Little things I love about you">
      <p className="section-intro">Some are big. Most are tiny. All of them are very you.</p>
      <div className="love-deck">
        <span className="love-deck__back love-deck__back--one" />
        <span className="love-deck__back love-deck__back--two" />
        <button className={`love-card ${opened ? 'love-card--open' : ''}`} type="button" onClick={handleCard}>
          <motion.span key={`${index}-${opened}`} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
            {opened ? (
              <><Heart size={28} fill="currentColor" /><strong>{siteContent.loveNotes[index]}</strong></>
            ) : (
              <><small>little thing no. {index + 1}</small><Heart size={34} /><strong>Tap to reveal</strong></>
            )}
          </motion.span>
        </button>
      </div>
      <div className="deck-progress" aria-label={`${index + 1} of ${siteContent.loveNotes.length}`}>
        {siteContent.loveNotes.map((note, dotIndex) => <i className={dotIndex <= revealedThrough ? 'active' : ''} key={note} />)}
      </div>
      <div className="deck-actions">
        {index > 0 && <button type="button" className="text-button" onClick={() => setIndex((current) => current - 1)}>← Previous</button>}
        {opened && index < lastIndex && <button type="button" className="text-button" onClick={() => setIndex((current) => current + 1)}>Next →</button>}
      </div>
      {allRevealed && <ContinueButton target="finale">One last thing</ContinueButton>}
    </SectionShell>
  )
}
