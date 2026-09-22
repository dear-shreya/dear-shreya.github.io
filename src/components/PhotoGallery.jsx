import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import SectionShell from './SectionShell'
import ContinueButton from './ContinueButton'
import { siteContent } from '../data/siteContent'

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const handleKey = (event) => event.key === 'Escape' && setSelected(null)
    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', handleKey)
    }
  }, [selected])

  return (
    <SectionShell id="memories" eyebrow="Chapter three" title="A few moments I keep coming back to" className="gallery-section">
      <p className="section-intro">A few little pieces of those five days I already want to keep forever.</p>
      <p className="swipe-hint" aria-hidden="true">Swipe through our little moments →</p>
      <div className="memory-grid">
        {siteContent.photos.map((photo, index) => (
          <motion.button
            className="polaroid"
            type="button"
            key={`${photo.src}-${index}`}
            onClick={() => setSelected(photo)}
            whileHover={{ y: -7, rotate: index % 2 ? 1 : -1 }}
            aria-label={`Open photo: ${photo.caption}`}
          >
            <span className="polaroid__image"><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" /><Maximize2 size={18} /></span>
            <span className="polaroid__caption">{photo.caption}</span>
            {photo.date && <span className="polaroid__date">{photo.date}</span>}
          </motion.button>
        ))}
      </div>
      <ContinueButton target="love-notes">There’s more</ContinueButton>
      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.caption} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="lightbox__card" initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94 }} onClick={(event) => event.stopPropagation()}>
              <button className="icon-button lightbox__close" type="button" onClick={() => setSelected(null)} aria-label="Close photo"><X /></button>
              <img src={selected.src} alt={selected.alt} decoding="async" />
              <div><h3>{selected.caption}</h3>{selected.date && <p>{selected.date}</p>}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  )
}
