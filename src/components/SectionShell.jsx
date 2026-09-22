import { motion } from 'framer-motion'

export default function SectionShell({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`chapter ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="chapter__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </motion.section>
  )
}
