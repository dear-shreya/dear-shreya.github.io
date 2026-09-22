import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function MusicButton({ visible }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => () => audioRef.current?.pause(), [])

  const toggleMusic = async () => {
    if (!siteContent.musicFile) {
      window.open(siteContent.musicLink, '_blank', 'noopener,noreferrer')
      return
    }
    if (!audioRef.current) {
      audioRef.current = new Audio(siteContent.musicFile)
      audioRef.current.loop = true
      audioRef.current.volume = 0.45
    }
    if (playing) audioRef.current.pause()
    else await audioRef.current.play()
    setPlaying(!playing)
  }

  if (!visible) return null

  return (
    <button
      className="music-button"
      type="button"
      onClick={toggleMusic}
      title={siteContent.musicFile ? `${playing ? 'Pause' : 'Play'} music` : `Open ${siteContent.favoriteSong}`}
      aria-label={siteContent.musicFile ? `${playing ? 'Pause' : 'Play'} background music` : `Open ${siteContent.favoriteSong}`}
    >
      {playing ? <Pause size={17} /> : <Music size={17} />}
      <span>{playing ? 'Pause' : siteContent.favoriteSong}</span>
    </button>
  )
}
