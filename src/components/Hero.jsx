import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

export default function Hero({ onOpen }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.span
          className="hero__seal"
          animate={{ rotate: [0, 5, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        >
          <Heart size={24} fill="currentColor" aria-hidden="true" />
        </motion.span>
        <p className="eyebrow">A tiny corner of the internet for a big part of my life, filled with all of my heart</p>
        <h1 id="hero-title">Hey Shreya <span>♥</span></h1>
        <p className="hero__subtitle">I made a little something for you...</p>
        <motion.button className="primary-button" type="button" onClick={onOpen} whileTap={{ scale: 0.97 }}>
          Open your surprise
          <Sparkles size={18} aria-hidden="true" />
        </motion.button>
        <p className="hero__signature">made with love by Aditya</p>
        <div className="hero__music-hint">
          <p>Also, Alexa, play Ek Din Aap Yun Humko Mil Jaayenge.</p>
          <small>bbg please top right side wala song icon click kar do pehle ek baar</small>
        </div>
      </motion.div>
      <div className="floaters" aria-hidden="true">
        <span>♥</span><span>✦</span><span>♥</span><span>✧</span><span>♥</span>
      </div>
    </section>
  )
}
