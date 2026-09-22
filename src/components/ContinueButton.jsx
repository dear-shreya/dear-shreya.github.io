import { ArrowDown } from 'lucide-react'

export default function ContinueButton({ target, children = 'Keep going' }) {
  const moveNext = () => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <button className="continue-button" type="button" onClick={moveNext}>
      {children}
      <ArrowDown size={16} aria-hidden="true" />
    </button>
  )
}
