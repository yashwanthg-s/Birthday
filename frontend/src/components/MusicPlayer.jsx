import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  // Auto-play after user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        if (audioRef.current) {
          console.log('Attempting to play audio...')
          audioRef.current.play()
            .then(() => {
              console.log('Audio playing successfully!')
              setIsPlaying(true)
            })
            .catch(err => {
              console.error('Autoplay prevented or audio error:', err)
              setIsPlaying(false)
            })
        }
      }
    }

    document.addEventListener('click', handleInteraction, { once: true })
    return () => document.removeEventListener('click', handleInteraction)
  }, [hasInteracted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-4 right-4 z-50 glass rounded-full p-4 shadow-2xl"
    >
      <audio
        ref={audioRef}
        loop
        src="/music/birthday-song.mp3"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio loading error:', e)}
      />
      
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="text-white text-2xl hover:text-pink-400 transition-colors"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="text-white text-2xl hover:text-pink-400 transition-colors"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </motion.button>

        <motion.div
          animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
          className="text-2xl"
        >
          🎵
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer
