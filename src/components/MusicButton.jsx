import { useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function MusicButton({ visible }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => () => audioRef.current?.pause(), [])

  const toggleMusic = async () => {
    if (!siteContent.musicFile) {
      setPlaying(!playing)
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
    <>
      <button
        className="music-button"
        type="button"
        onClick={toggleMusic}
        title={`${playing ? 'Pause' : 'Play'} music`}
        aria-label={`${playing ? 'Pause' : 'Play'} background music`}
      >
        {playing ? <Pause size={17} /> : <Music size={17} />}
        <span>{playing ? 'Pause' : siteContent.favoriteSong}</span>
      </button>
      {!siteContent.musicFile && playing && (
        <div className="music-player">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${siteContent.musicVideoId}?autoplay=1&loop=1&playlist=${siteContent.musicVideoId}&playsinline=1&rel=0`}
            title={`${siteContent.favoriteSong} music player`}
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </div>
      )}
    </>
  )
}
