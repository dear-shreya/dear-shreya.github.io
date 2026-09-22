import { useState } from 'react'
import { motion } from 'framer-motion'
import { PartyPopper } from 'lucide-react'
import SectionShell from './SectionShell'
import ContinueButton from './ContinueButton'

function Confetti({ active }) {
  if (!active) return null
  const colors = ['#e98ca4', '#f5b38c', '#ab93c9', '#e7bd69']
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 32 }, (_, index) => (
        <i
          key={index}
          style={{
            '--x': `${(index * 37) % 100}%`,
            '--delay': `${(index % 8) * 0.08}s`,
            '--color': colors[index % colors.length],
            '--turn': `${(index % 2 ? 1 : -1) * (120 + index * 9)}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default function BirthdayCake() {
  const [stage, setStage] = useState('ready')
  const lit = stage === 'lit'
  const celebrated = stage === 'celebrated'

  const handleCake = () => {
    if (stage === 'ready') setStage('lit')
    else if (stage === 'lit') setStage('celebrated')
  }

  return (
    <SectionShell id="birthday" eyebrow="Chapter one" title="Happy Birthday, Shreya!" className="cake-section">
      <p className="section-intro">This is a very important day to me because the person who matters so much in my life came into this world on this day.</p>
      <Confetti active={celebrated} />
      <button
        className={`cake ${lit ? 'cake--lit' : ''} ${celebrated ? 'cake--celebrated' : ''}`}
        type="button"
        onClick={handleCake}
        aria-label={stage === 'ready' ? 'Light the birthday candles' : stage === 'lit' ? 'Blow out the birthday candles' : 'Birthday wish made'}
      >
        <span className="cake__candles">
          {[0, 1, 2].map((candle) => (
            <span className="candle" key={candle}>
              <motion.span className="flame" animate={lit ? { scale: [1, 1.16, 0.9, 1], rotate: [-3, 4, -2] } : { scale: 0 }} transition={{ repeat: Infinity, duration: 0.8 }} />
            </span>
          ))}
        </span>
        <span className="cake__top" />
        <span className="cake__icing" />
        <span className="cake__base"><span>Shreya</span></span>
        <span className="cake__plate" />
      </button>
      <div className="cake-instruction" aria-live="polite">
        {stage === 'ready' && 'Tap the cake to light the candles'}
        {stage === 'lit' && 'Now tap again and make a wish'}
        {celebrated && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <PartyPopper size={22} aria-hidden="true" />
            <span>
              <strong>Okay... now your birthday officially begins.</strong>
              <small className="inside-joke">Lowkey v happy your parents made love that night😂</small>
            </span>
          </motion.div>
        )}
      </div>
      {celebrated && <ContinueButton target="story">Something I want to say</ContinueButton>}
    </SectionShell>
  )
}
