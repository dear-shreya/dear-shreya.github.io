import { motion } from 'framer-motion'
import { Heart, MapPin, Stethoscope, Cpu, Music2 } from 'lucide-react'
import SectionShell from './SectionShell'
import ContinueButton from './ContinueButton'
import { siteContent } from '../data/siteContent'

export default function Story() {
  return (
    <SectionShell id="story" eyebrow="Chapter two" title="Before anything else...">
      <div className="personal-note">
        <p>You don’t even know how happy I am just because of the simple fact that you came into this world. I love you, meri jaan.</p>
        <p>You know how bad I am at thinking of and giving gifts, right? The only thing I could think of was putting together all the things I cherish about you, plus a few memories for both of us. Please enjoy this little few-minute thing I made for you.</p>
      </div>
      <p className="story-kicker">How it all started</p>
      <p className="story-lede">From Rohtak to Vadodara,<br />Hyderabad to Rajkot,<br />engineering to medicine,<br />and OmeTV, of course.<br /><em>Somehow our paths crossed.</em></p>
      <div className="song-note"><Music2 size={15} /> Alexa, play <strong>“{siteContent.favoriteSong}”</strong></div>
      <div className="us-card">
        <div className="person">
          <span className="person__icon"><Stethoscope size={24} /></span>
          <h3>{siteContent.girlfriend.name}</h3>
          <p>{siteContent.girlfriend.role}</p>
          <small><MapPin size={13} /> {siteContent.girlfriend.place}</small>
        </div>
        <motion.div className="us-card__heart" animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 2.2 }}>
          <Heart fill="currentColor" size={24} />
        </motion.div>
        <div className="person">
          <span className="person__icon"><Cpu size={24} /></span>
          <h3>{siteContent.boyfriend.name}</h3>
          <p>{siteContent.boyfriend.role}</p>
          <small><MapPin size={13} /> {siteContent.boyfriend.place}</small>
        </div>
      </div>
      <div className="timeline">
        {siteContent.story.map((memory, index) => (
          <motion.article
            className="timeline__item"
            key={memory.label}
            initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span>{memory.icon}</span>
            <div><h3>{memory.label}</h3><p>{memory.detail}</p></div>
          </motion.article>
        ))}
      </div>
      <ContinueButton target="memories">See our memories</ContinueButton>
    </SectionShell>
  )
}
